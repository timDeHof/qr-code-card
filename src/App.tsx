import { Card } from "./components/card";
import qrCode from "./assets/images/image-qr-code.png";
const cardData = {
  title: "Improve your front-end skills by building projects",
  subtitle:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  imageUrl: qrCode,
};

function App() {
  const { title, subtitle, imageUrl } = cardData;
  return (
    <>
      <Card title={title} subtitle={subtitle} imgUrl={imageUrl} />
      <div className='attribution'>
        Challenge by{" "}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Tim DeHof</a>.
      </div>
    </>
  );
}

export default App;
