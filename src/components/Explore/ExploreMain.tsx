import ExploreItem from "@/components/Explore/ExploreItem";

export default function ExploreMain() {
  return (
    <>
      <div className="explore-title">Explore options near me</div>
      <ExploreItem
        title="Popular cuisines near me"
        description="BBQ food near meBeverages food near meBiryani food near meBurger food near meChinese food near meCoffee food near meContinental food near meDesserts food near meKebab food near meMomos food near meMughlai food near meNorth Indian food near mePizza food near meSalad food near meSandwich food near meSeafood food near meShake food near meShawarma food near meSouth Indian food near meStreet food near me"
      />
      <ExploreItem
        title="Popular restaurant types near me"
        description="Bakeries near meBars near meBeverage Shops near meCafés near meCasual Dining near meDessert Parlors near meFine Dining near meFood Trucks near meKiosks near meQuick Bites near meSweet Shops near me"
      />
      <ExploreItem
        title="Cities We Deliver To"
        description="Delhi NCRKolkataMumbaiBengaluruPuneHyderabadChennaiLucknowKochiJaipurAhmedabadChandigarhGoaIndoreGangtokNashikOotyShimlaLudhianaGuwahatiAmritsarKanpurAllahabadAurangabadBhopalRanchiVisakhapatnamBhubaneswarCoimbatoreMangaloreVadodaraNagpurAgraDehradunMysorePuducherrySuratVaranasiPatnaUdaipurKhajurahoNeemranaCuttackTrivandrumHaridwarLehPushkarRajkotMaduraiKozhikodeAlappuzhaThrissurManipalVijayawadaJodhpurKotaAjmerMussoorieRishikeshJalandharJammuManaliDharamshalaRaipurSee more"
      />
    </>
  );
}
