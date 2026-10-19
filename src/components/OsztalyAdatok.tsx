
type OsztalyAdatokProps = {
  jelenlevok: number;
  hangulat: string;
};

function OsztalyAdatok({
  jelenlevok,
  hangulat,
}: OsztalyAdatokProps) {
  return (
    <div>
      <p>Jelenlévők száma: {jelenlevok}</p>
      <p>Hangulat: {hangulat}</p>
    </div>
  );
}

export default OsztalyAdatok;
