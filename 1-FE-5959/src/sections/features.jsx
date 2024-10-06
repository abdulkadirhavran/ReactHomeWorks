import Card from "../components/Card.jsx";
import "./sass/features.scss";

const Features = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <Card
            icon={"bi-controller"}
            title={"MSI APP Player"}
            description={
              "BlueStacks ile yapılan özel işbirliği sayesinde geliştirilen MSI APP Player, konsol modu ile mobil oyunlar ve PC platformu arasında kesintisiz geçiş yapmanızı sağlar."
            }
          />
          <Card
            icon={"bi-display"}
            title={"AI-POWERED PERFORMANCE AND LİFELİKE GRAPHİCS"}
            description={
              "Get a quantum leap in performance in games and creative apps with AI-powered DLSS 3 and enable lifelike virtual worlds with full ray tracing."
            }
          />
          <Card
            icon={"bi-unity"}
            title={"OPTİMİZED POWER AND PERFORMANCE"}
            description={
              "NVIDIA Max-Q is an advanced suite of AI-powered technologies that optimize your system for peak efficiency. This enables blazing-fast laptops that are thin, quiet, and have amazing battery life."
            }
          />
          <Card
            icon={"bi-file-music"}
            title={"GELECEK NESİL SES DENEYİMİ"}
            description={
              "Müziği tam da duymanız gerektiği gibi deneyimleyin, Nahimic Oyun içi 3D Surround Sharing ile Bluetooth üzerinden paylaşın."
            }
          />
          <Card
            icon={"bi-speedometer2"}
            title={"GEFORCE RTX™ 40 SERIES LAPTOPS BEYOND FAST"}
            description={
              "NVIDIA® GeForce RTX™ 40 Series GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture which delivers a quantum leap in both performance and AI-powered graphics. Experience lifelike virtual worlds with ray tracing and ultra-high FPS gaming with the lowest latency. Discover revolutionary new ways to create and unprecedented workflow acceleration."
            }
          />
          <Card
            icon={"bi-cpu"}
            title={"Multicore produce research again!"}
            description={
              "Katana 17 B12V, en yeni 12.Nesil Intel® Core™ i7 işlemcisinin performans ve verimlilik çekirdekleri ile çok görevli projelerinizde ve performans gerektiren oyunlarda eşi görülmemiş bir güç artışı sunar."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
