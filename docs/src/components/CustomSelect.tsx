import { ClientOnly } from '@tanstack/react-router'
import { Cat, Dog, Bird } from 'lucide-react'

export default function CustomSelect() {
    return (
        <ClientOnly fallback={<div>Loading...</div>}>
            <select className="custom-select" id="animal-select" style={{ margin: '2rem auto' }}>
                <button>
                    Selected animal:<selectedcontent></selectedcontent>
                </button>
                <option value="1" > <Cat /> Cat
                </option>
                <option value="2" > <Dog /> Dog</option>
                <option value="3" > <Bird /> Bird</option>
            </select>
        </ClientOnly>
    )
}
