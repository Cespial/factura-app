export interface Invoice {
  id: string;
  user_id: string;
  file_name: string;
  file_url: string;
  file_type: "pdf" | "xml";
  file_size: number;
  status: "pending" | "processing" | "completed" | "error";
  invoice_number?: string;
  issuer_name?: string;
  issuer_nit?: string;
  total_amount?: number;
  currency?: string;
  issue_date?: string;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  plan: Plan;
  invoices_this_month: number;
  created_at: string;
}

export type Plan = "free" | "pro" | "enterprise";

export interface PlanDetails {
  name: string;
  monthly_limit: number;
  price: number;
  features: string[];
}

export const PLAN_DETAILS: Record<Plan, PlanDetails> = {
  free: {
    name: "Gratis",
    monthly_limit: 18,
    price: 0,
    features: [
      "18 facturas por mes",
      "Procesamiento basico",
      "Historial 30 dias",
    ],
  },
  pro: {
    name: "Pro",
    monthly_limit: 500,
    price: 49900,
    features: [
      "500 facturas por mes",
      "Procesamiento prioritario",
      "Historial ilimitado",
      "Reportes avanzados",
      "Soporte prioritario",
    ],
  },
  enterprise: {
    name: "Enterprise",
    monthly_limit: Infinity,
    price: 199900,
    features: [
      "Facturas ilimitadas",
      "API dedicada",
      "Soporte 24/7",
      "Integraciones custom",
    ],
  },
};
