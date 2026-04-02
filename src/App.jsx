import { useState } from 'react'
import {
  Phone,
  Tablet,
  BatteryCharging,
  Droplet,
  ShieldCheck,
  Sparkles,
  Clock3,
  ChevronRight,
  PhoneCall,
} from 'lucide-react'

const serviceItems = [
  { title: 'Cambio de Pantalla', description: 'Reemplazo profesional con pantalla original.', icon: Phone, color: '#FCD116' },
  { title: 'Baterías', description: 'Diagnóstico rápido y reemplazo seguro.', icon: BatteryCharging, color: '#003893' },
  { title: 'Daños por Líquidos', description: 'Limpieza y recuperación rápida.', icon: Droplet, color: '#CE1126' },
  { title: 'Protección', description: 'Vidrios templados y fundas de alta resistencia.', icon: ShieldCheck, color: '#FCD116' },
  { title: 'Mantenimiento', description: 'Optimización y limpieza interna profunda.', icon: Sparkles, color: '#003893' },
  { title: 'Servicio Rápido', description: 'Atención express para mantenerte conectado.', icon: Clock3, color: '#CE1126' },
]

const deviceTypes = [
  { id: 'celular', title: 'Celular', icon: Phone },
  { id: 'tablet', title: 'Tablet', icon: Tablet },
]

const brands = ['Samsung', 'iPhone', 'Huawei', 'Xiaomi', 'Motorola', 'LG']

function Card({ title, description, icon: Icon, color }) {
  return (
    <article className="group rounded-[28px] border border-slate-200 bg-white/90 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 h-1 w-16 rounded-full" style={{ backgroundColor: color }} />
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl transition" style={{ backgroundColor: `${color}22`, color }}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </article>
  )
}

function SelectableCard({ title, subtitle, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col gap-3 rounded-[28px] border p-5 text-left transition-shadow duration-200 ${
        selected
          ? 'border-[#FCD116] bg-[#FCD116]/10 shadow-soft'
          : 'border-slate-200 bg-white shadow-sm hover:border-[#FCD116] hover:bg-[#FCD116]/5'
      }`}
    >
      <span className="text-sm uppercase tracking-[0.25em] text-slate-500">{subtitle}</span>
      <span className="text-lg font-semibold text-slate-900">{title}</span>
    </button>
  )
}

function App() {
  const [selectedDevice, setSelectedDevice] = useState('celular')
  const [selectedBrand, setSelectedBrand] = useState('Samsung')
  const [selectedModel, setSelectedModel] = useState('Galaxy S23')

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="relative overflow-hidden">
        <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(252,209,22,0.28),transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.16),transparent_22%),linear-gradient(135deg,#FCD116_0%,#003893_36%,#CE1126_100%)] px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-[#FCD116] bg-[#FCD116]/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">
                  TelCol Repairs
                </span>
                <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Mantenimiento de Equipos Móviles con estilo profesional.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
                  Soluciones visuales y confiables para tu celular o tablet. Atención rápida, diseño moderno y experiencia premium orientada a cada cliente.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a href="#servicios" className="inline-flex items-center justify-center rounded-full bg-[#FCD116] px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#f3d640]">
                    Ver Servicios
                  </a>
                  <a href="#interactivo" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/25">
                    Contactar
                  </a>
                  <span className="inline-flex items-center rounded-full bg-[#CE1126]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#CE1126]">
                    100% Colombiana
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute -left-12 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                <div className="rounded-[36px] border border-white/20 bg-white/10 p-8 shadow-soft backdrop-blur-xl sm:p-10">
                  <div className="space-y-6">
                    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white shadow-lg shadow-slate-950/10">
                      <p className="text-sm uppercase tracking-[0.24em] text-[#FCD116]">TelCol en acción</p>
                      <h2 className="mt-4 text-3xl font-semibold">Reparaciones sin pausa</h2>
                      <p className="mt-3 text-sm leading-7 text-slate-100/90">Desde cambio de pantalla hasta mantenimiento integral, con tiempos claros y garantía visual.</p>
                    </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-[#FCD116]/30 bg-[#FCD116]/10 p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#003893]">Atención</p>
                        <p className="mt-3 text-2xl font-semibold text-[#003893]">Express</p>
                      </div>
                      <div className="rounded-3xl border border-[#CE1126]/25 bg-[#fee2e2] p-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#991B1B]">Garantía</p>
                        <p className="mt-3 text-2xl font-semibold text-[#991B1B]">Calidad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">Servicios</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Soluciones completas para tu equipo móvil</h2>
            <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#FCD116] via-[#003893] to-[#CE1126]" />
            <p className="mt-6 text-base leading-7 text-slate-600">Explora nuestras categorías de servicio pensadas para tu tranquilidad y la performance de tus dispositivos.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((service) => (
              <Card key={service.title} title={service.title} description={service.description} icon={service.icon} color={service.color} />
            ))}
          </div>
        </section>

        <section id="interactivo" className="bg-slate-100 px-6 py-16 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#003893]/10 text-[#003893]">01</span>
                  Selección rápida
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-slate-900">Arma tu servicio ideal</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">Elige tu dispositivo, marca y modelo para ver cómo se ajusta el servicio a tus necesidades. Todo con una experiencia visual clara y moderna.</p>

                <div className="mt-10 space-y-8">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Paso 1</p>
                        <p className="text-sm text-slate-500">Tipo de dispositivo</p>
                      </div>
                      <span className="rounded-full bg-[#FCD116]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#003893]">Interactivo</span>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {deviceTypes.map((device) => (
                        <SelectableCard
                          key={device.id}
                          title={device.title}
                          subtitle={device.id === selectedDevice ? 'Seleccionado' : 'Toca para elegir'}
                          selected={selectedDevice === device.id}
                          onClick={() => setSelectedDevice(device.id)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-900">Paso 2</p>
                      <p className="text-sm text-slate-500">Marca del dispositivo</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {brands.map((brandItem) => (
                        <SelectableCard
                          key={brandItem}
                          title={brandItem}
                          subtitle={selectedBrand === brandItem ? 'Seleccionado' : 'Toca para elegir'}
                          selected={selectedBrand === brandItem}
                          onClick={() => setSelectedBrand(brandItem)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-900">Paso 3</p>
                      <p className="text-sm text-slate-500">Modelo</p>
                    </div>
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-sm">
                      <label className="mb-3 block text-sm font-semibold text-slate-900">Modelo preferido</label>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <input
                          value={selectedModel}
                          onChange={(event) => setSelectedModel(event.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#FCD116] focus:ring-2 focus:ring-[#FCD116]/30"
                          placeholder="Ej. Galaxy S23"
                        />
                        <button type="button" className="inline-flex items-center justify-center rounded-full bg-[#003893] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002d74]">
                          Confirmar <ChevronRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 rounded-[32px] border border-[#003893]/10 bg-gradient-to-br from-[#003893]/10 via-white to-[#CE1126]/10 p-8 shadow-soft">
                <div className="rounded-[28px] bg-[#003893]/10 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#003893]">Resumen visual</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">Tu selección</h3>
                  <div className="mt-6 space-y-4 text-sm text-slate-600">
                    <div className="flex items-center justify-between rounded-3xl bg-white/90 px-5 py-4 shadow-sm">
                      <span className="text-slate-500">Dispositivo</span>
                      <span className="font-semibold text-slate-900">{selectedDevice === 'celular' ? 'Celular' : 'Tablet'}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-3xl bg-white/90 px-5 py-4 shadow-sm">
                      <span className="text-slate-500">Marca</span>
                      <span className="font-semibold text-slate-900">{selectedBrand}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-3xl bg-white/90 px-5 py-4 shadow-sm">
                      <span className="text-slate-500">Modelo</span>
                      <span className="font-semibold text-slate-900">{selectedModel}</span>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-950/5">
                  <p className="text-sm uppercase tracking-[0.3em] text-[#003893]">TelCol</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">Atención diseñada para ti</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">Esta interfaz te permite ver al instante qué equipo y marca escogiste, sin ningún backend ni proceso real. Solo un selector visual pensado para tu experiencia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="#"
        className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 transition duration-200 hover:-translate-y-1"
      >
        <PhoneCall className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  )
}

export default App
