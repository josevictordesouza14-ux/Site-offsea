export const company = {
  name: "OFFSEA",
  legalName: "OFFSEA Comércio de Materiais e Equipamentos Ltda.",
  email: "comercial@offsea.com.br",
  phone: "+55 (21) 97539-6623",
  phoneHref: "+5521975396623",
  whatsapp: "5521975396623",
  website: "https://www.offsea.com.br",
};

export function whatsappUrl(message = "Olá! Gostaria de solicitar uma cotação à OFFSEA.") {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
