export interface CRMLeadData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country_name: string;
  description: string;
  source_id?: string;
  how_much_invested?: string;
  outline_your_case?: string;
}

export async function submitToCRM(data: CRMLeadData): Promise<{ success: boolean; error?: string }> {
  const url = "https://inwo.crmcore.me/api/lead_management/api/affiliates";
  const token = "AFF_1_92cbc1bc76284e19b711bab22587d75f";

  const payload = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    country_name: data.country_name || "cy",
    description: data.description || "Submitted via Le Capital Moderne website",
    custom_fields: {
      Source_ID: data.source_id || "web",
      How_Much_Invested: data.how_much_invested || "0",
      Outline_Your_Case: data.outline_your_case || data.description || ""
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

    // CRM might return no response body or error
    if (response.ok) {
      return { success: true };
    } else {
      const errText = await response.text().catch(() => "Unknown error");
      return { success: false, error: `CRM responded with status ${response.status}: ${errText}` };
    }
  } catch (error: any) {
    console.error("CRM submission error:", error);
    return { success: false, error: error.message || "Network error" };
  }
}
