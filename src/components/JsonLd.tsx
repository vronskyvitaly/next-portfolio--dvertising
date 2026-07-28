/**
 * Вывод JSON-LD одним тегом. Серверный компонент — разметка попадает
 * в HTML сразу, без ожидания гидратации.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
