import { Root } from './Services/indes.D';
export const retonarFech = async (url: string): Promise<Root[] | undefined> => {
    try {
        const Datum = await fetch(url)
        if (!Datum.ok) {
            console.log("error al conecntase")
            return undefined
        }
        const data: Root[] = await Datum.json()
        return data
    } catch (error) {
        return undefined
    }


}


