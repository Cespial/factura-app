# FacturaApp

> Dashboard SaaS para gestión de facturas electrónicas colombianas (DIAN) — importación XML/JSON, catálogo de productos, reportes tributarios y análisis por cliente/periodo.

[![Next.js](https://img.shields.io/badge/Next.js-16-000?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![Recharts](https://img.shields.io/badge/Recharts-22B5BF)](https://recharts.org)

## Funcionalidades

- **Upload de facturas** — Drag-and-drop de PDFs y XMLs (max. 10MB)
- **Dashboard** — Métricas con sparklines, gráfico de actividad semanal/mensual/anual, feed de actividad reciente
- **Historial** — Tabla completa de facturas procesadas con estado, emisor, monto y descarga
- **Límites de uso** — Modelo freemium con límites mensuales y modal de upgrade
- **Autenticación** — Login con Google OAuth via Supabase

## Planes

| Plan | Facturas/mes | Precio |
|------|-------------|--------|
| Gratis | 18 | $0 |
| Pro | 500 | $49,900 COP/mes |
| Enterprise | Ilimitadas | $199,900 COP/mes |

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **React 19** + **Tailwind CSS v4**
- **shadcn/ui** (Radix UI) — Componentes
- **Recharts** — Gráficos de actividad
- **Supabase** — Auth, base de datos y storage
- **Lucide React** — Iconografía

## Instalación

```bash
npm install

# Configurar Supabase en .env.local:
# NEXT_PUBLIC_SUPABASE_URL=tu_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key

npm run dev
```

## Estructura

```
src/app/
  dashboard/
    page.tsx        → Dashboard principal
    upload/         → Página de upload
    history/        → Historial de facturas
  login/            → Login con Google
src/components/
  sidebar.tsx       → Navegación lateral
  stat-card.tsx     → Tarjetas KPI con sparkline
  upload-zone.tsx   → Zona de drag-and-drop
  invoice-chart.tsx → Gráfico de barras
  upgrade-modal.tsx → Modal de upgrade de plan
src/lib/supabase/   → Clientes browser y server
```

## Autor

Cristian Espinal — [@Cespial](https://github.com/Cespial)
