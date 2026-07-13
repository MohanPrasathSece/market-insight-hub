export interface CRMLeadData {
  name: string;
  email: string;
  number: string;
  countryCode?: string;
  message?: string;
  how_much_invested?: string;
  leadType?: "contact" | "signup";
}

export async function submitToCRM(data: CRMLeadData): Promise<{ success: boolean; error?: string }> {
  // Use environment variables or fallback values
  const url = import.meta.env.VITE_CRM_URL || "https://inwo.crmcore.me/api/lead_management/api/affiliates";
  const token = import.meta.env.VITE_CRM_TOKEN || "AFF_1_92cbc1bc76284e19b711bab22587d75f";

  const [first_name, ...lastNameParts] = (data.name || "Unknown").trim().split(" ");
  const last_name = lastNameParts.length > 0 ? lastNameParts.join(" ") : "";

  let phone = (data.number || "").replace(/[^0-9+]/g, '');
  
  const countryDialCodes: Record<string, string> = {
    CH: '41', FR: '33', BE: '32', CA: '1', US: '1', GB: '44', DE: '49',
    ES: '34', IT: '39', NL: '31', SE: '46', AU: '61', IN: '91', AE: '971',
    SG: '65', ZA: '27', BR: '55', MX: '52', JP: '81', CY: '357'
  };

  const selectedCode = data.countryCode?.toUpperCase() || 'CH';
  const dialCode = countryDialCodes[selectedCode] || '41';

  // Remove leading +, 00, or 0 to get the raw number
  if (phone.startsWith('+')) phone = phone.slice(1);
  if (phone.startsWith('00')) phone = phone.slice(2);
  else if (phone.startsWith('0')) phone = phone.slice(1);
  
  // If the number somehow still starts with the dial code, don't double it
  if (phone.startsWith(dialCode) && phone.length > dialCode.length + 5) {
    phone = '00' + phone;
  } else {
    phone = '00' + dialCode + phone;
  }

  const payload = {
    first_name: first_name,
    last_name: last_name,
    email: data.email,
    phone: phone,
    country_name: selectedCode.toLowerCase(),
    description: "Le Capital Moderne",
    custom_fields: {
      Source_ID: "website",
      How_Much_Invested: data.how_much_invested || "0",
      Outline_Your_Case: data.message || ""
    }
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": token
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      try {
        const url = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_DASHBOARD_URL) || "https://lead-dashboard-orcin.vercel.app/api/increment";
        const leadType = data.leadType || (data.message ? "contact" : "signup");
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Le Capital Moderne", type: leadType, name: data.name, email: data.email})
        }).catch(() => {});
      } catch(e){}
        incrementLeadCount();
      incrementLeadCount();
    return { success: true,
        incrementedCount: (incrementLeadCount(), true) };
    } else {
      const errText = await response.text().catch(() => "Unknown error");
      return { success: false, error: `CRM responded with status ${response.status}: ${errText}` };
    }
  } catch (error: any) {
    console.error("CRM submission error:", error);
    return { success: false, error: error.message || "Network error" };
  }
}


function incrementLeadCount() {
  fetch("/api/leads-count", { method: "POST" }).catch((err) =>
    console.warn("[leads-count] Failed to increment:", err)
  );
}
