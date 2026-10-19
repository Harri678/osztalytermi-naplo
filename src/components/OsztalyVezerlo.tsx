type OsztalyVezerloProps = {
  jelenletNovelese: () => void;
  jelenletCsokkentese: () => void;
  hangulatValtoztatas: () => void;
};

function OsztalyVezerlo({
    jelenletNovelese,
    jelenletCsokkentese,
    hangulatValtoztatas,
}: OsztalyVezerloProps) {  
    return(
        <>
            <button onClick={jelenletNovelese}>jelenletNovelese</button>
            <button onClick={jelenletCsokkentese}>jelenletCsokkentese</button>
            <button onClick={hangulatValtoztatas}>hangulatValtoztatas</button>
        </>
    )
}

export default OsztalyVezerlo