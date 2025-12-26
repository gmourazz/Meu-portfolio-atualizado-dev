import type { PrivacyPolicyToast } from "../types/footer";

export function getPrivacyPolicyToast(): PrivacyPolicyToast {
  return {
    title: "Política de Privacidade",
    description:
      "Os dados informados são usados apenas para contato profissional e não são compartilhados com terceiros.",
  };
}
