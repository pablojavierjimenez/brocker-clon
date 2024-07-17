import { Metadata } from 'next';
import GeneralHeader from '../../../../components/general-header';
import MarketMenu from '../../../../components/market-nav-menu';

export const metadata: Metadata = {
    title: {
        absolute:"Blog"
    }
}


export default function Market(){
    return(<section>
        <MarketMenu />
    </section>)
} 