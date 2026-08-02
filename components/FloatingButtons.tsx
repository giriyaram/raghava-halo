'use client'
import { useModal } from '@/lib/modal-context'

export default function FloatingButtons() {
  const { openModal } = useModal()
  return (
    <>
      <a
        id="float-whatsapp"
        href="https://wa.me/919849019238?text=Hi%2C+I'm+interested+in+Raghava+Halo+in+Kondapur."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry for Kondapur project"
      >
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L0 24l6.328-1.51A11.931 11.931 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.358-.213-3.755.895.954-3.659-.234-.374A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.425-4.394 9.818-9.818 9.818z" />
        </svg>
      </a>
      <div id="float-cta" role="complementary" aria-label="Mobile enquiry button">
        <button onClick={openModal} aria-label="Enquire about available residences">
          Enquire Now — Starting ₹1.6 Cr
        </button>
      </div>
    </>
  )
}
