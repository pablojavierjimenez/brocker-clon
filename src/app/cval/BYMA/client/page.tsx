import { Metadata } from 'next';


export const metadata: Metadata = {
    title: {
        absolute:"Blog"
    }
}


export default function Client(){
    return(<section>
        {"CLIENT BODY SECTION"}
    </section>)
}