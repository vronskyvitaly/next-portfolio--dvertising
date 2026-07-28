import { ImageResponse } from 'next/og'

export const alt =
  'Виталий Вронский — разработка сайтов, веб-приложений и автоматизация бизнеса'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * OG-картинка для шеринга. Наследуется всеми маршрутами, у которых
 * нет своей. Satori поддерживает только flexbox — grid не использовать.
 */
export default function Image() {
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
        {/* Градиентные сферы */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            left: -160,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(125,44,200,0.55) 0%, rgba(125,44,200,0) 68%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -260,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(0,112,243,0.5) 0%, rgba(0,112,243,0) 68%)'
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: '#8b8b8b'
            }}
          >
            Виталий Вронский
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.1,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: -2
            }}
          >
            Сайты, веб-приложения
          </div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.1,
              fontWeight: 700,
              color: '#c084fc',
              letterSpacing: -2
            }}
          >
            и автоматизация бизнеса
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ fontSize: 30, color: '#9ca3af' }}>
            Работаю по договору · код передаю вам
          </div>
          <div style={{ fontSize: 30, color: '#60a5fa' }}>vitalyvronsky.ru</div>
        </div>
      </div>
    ),
    size
  )
}
