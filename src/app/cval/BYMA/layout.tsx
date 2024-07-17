import GeneralHeader from '../../../components/general-header'


export default function ClientMarketLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
        <GeneralHeader />
        <main>{children}</main>
      </section>
    );
  }
