export interface CRMLeadData {
  name: string;
  email: string;
  number: string;
  message?: string;
  how_much_invested?: string;
}

export async function submitToCRM(data: CRMLeadData): Promise<{ success: boolean; error?: string }> {
  // Use environment variables or fallback values
  const url = import.meta.env.VITE_CRM_URL || "https://inwo.crmcore.me/api/lead_management/api/affiliates";
  const token = import.meta.env.VITE_CRM_TOKEN || "AFF_1_92cbc1bc76284e19b711bab22587d75f";

  const [first_name, ...lastNameParts] = (data.name || "Unknown").trim().split(" ");
  const last_name = lastNameParts.length > 0 ? lastNameParts.join(" ") : "Lead";

  let phone = (data.number || "").replace(/[^0-9+]/g, '');
  if (phone) {
    if (phone.startsWith('+')) {
      phone = '00' + phone.slice(1);
    }
    if (phone.startsWith('41') && phone.length === 11) {
      phone = '00' + phone;
    }
    if (!phone.startsWith('0041')) {
      if (phone.startsWith('0') && !phone.startsWith('00')) {
        phone = '0041' + phone.slice(1);
      } else if (!phone.startsWith('00')) {
        phone = '0041' + phone;
      }
    }
  } else {
    phone = "0000000000";
  }

  const payload = {
    first_name: first_name,
    last_name: last_name,
    email: data.email,
    phone: phone,
    country_name: "ch",
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
        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ website: "Le Capital Moderne", type: data.message ? "contact" : "signup", name: data.name, email: data.email})
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
