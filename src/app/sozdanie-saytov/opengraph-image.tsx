import { ImageResponse } from 'next/og'
import { formatPrice, getServices } from '@/config/services'

export const alt = 'Создание сайтов под ключ — цены и сроки'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/** Своя OG-картинка для коммерческого раздела: с ценами прямо на превью */
export default function Image() {
  const services = getServices().slice(0, 3)

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          padding: '72px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -240,
            right: -140,
            width: 660,
            height: 660,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(125,44,200,0.5) 0%, rgba(125,44,200,0) 68%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -280,
            left: -180,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(0,112,243,0.45) 0%, rgba(0,112,243,0) 68%)'
          }}
        />

        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#8b8b8b',
            display: 'flex'
          }}
        >
          Виталий Вронский
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: -2,
              display: 'flex'
            }}
          >
            Создание сайтов
          </div>
          <div
            style={{
              fontSize: 88,
              lineHeight: 1.05,
              fontWeight: 700,
              color: '#c084fc',
              letterSpacing: -2,
              display: 'flex'
            }}
          >
            под ключ
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            {services.map(service => (
              <div
                key={service.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  padding: '18px 24px',
                  borderRadius: 18,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div style={{ fontSize: 22, color: '#9ca3af' }}>
                  {service.name}
                </div>
                <div style={{ fontSize: 28, color: service.accent }}>
                  {formatPrice(service.priceFrom)}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 28, color: '#60a5fa', display: 'flex' }}>
            vitalyvronsky.ru/sozdanie-saytov
          </div>
        </div>
      </div>
    ),
    size
  )
}
