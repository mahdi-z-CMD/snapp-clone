import './App.css';
import Navbar from './Navbar';

function App() {
  const Box = (props) => {
    return(
      <div className="box">
      <div className="texts">
        <h2>{props.head}</h2>
        <h3>{props.head2}</h3>
      </div>
      <img src={props.icon} alt="pic" />
    </div>
    )
  }
  return (
   <>
   <Navbar />
   <div className="container">
    <div className="intor">
      <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/intro_desktop.jpg" alt="someone pic" />
    </div>
    <div className="login">
      <h1> تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ </h1>
      <p>از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.</p>
      <div className="input-btn">
        <input type="submit" value="ارسال لینک" />
        <input type="text" name="number" placeholder='09xxxxx6789' /> 
      </div>
      <div className="web-btn">
      <input type="submit" value="ورود به وب اپلیکیشن اسنپ" />
      </div>
    </div>
   </div>
   <div className="download-icon">
    <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/iApps.png" alt="iApps" />
    <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/sibapp-badge-white.png" alt="iApps" />
    <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/snapp-pwa.png" alt="iApps" />
    <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/bazaar.png" alt="iApps" />
    <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/markets/google-play-badge.png" alt="iApps" />
   </div>
   <div className="more">
    <h1>یک اپلیکیشن، برای تمام نیاز‌ها</h1>
    <div className="allbox">
      <Box icon="https://jek.snapp.ir/Redesign-Icons/Pickup-new.png" head="درخواست وانت" head2="حمل و نقل با اسنپ"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/bike.svg" head="پیک موتوری" head2="حمل و نقل با اسنپ"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/cab.svg" head="تاکسی اینترنتی" head2="امکان درخواست آنلاین خودرو با اسنپ"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/market.svg" head="اسنپ اکسپرس" head2="تحویل کمتر از ۳۰ دقیقه"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/market.svg" head="سوپرمارکت آنلاین" head2="تهیه اقلام روزانه با اسنپ"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/food.svg" head="سفارش آنلاین غذا " head2="سفارش غذا، نان و شیرینی با اسنپ"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/doctor.svg" head="دکتر" head2="درمان با اسنپ"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png" head="بلیط پرواز خارجی" head2="گردشگری با اسنپ"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/New%20padding/Domestic%20Trip.png" head="بلیط پرواز داخلی" head2="گردشگری با اسنپ"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/new%20Shop.png" head="فروشگاه" head2="خرید از فروشگاه های معتبر شهر"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/trip.svg" head="رزرو اقامتگاه" head2="گردشگری با اسنپ"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/hotel.png" head="رزرو هتل" head2="گردشگری با اسنپ"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/club.svg" head="اسنپ! ‌کلاب" head2="باشگاه مشتریان اسنپ!"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/train.png" head="بلیط قطار" head2="گردشگری با اسنپ"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/bus.png" head="بلیط اتوبوس" head2="گردشگری با اسنپ"/>
      <Box icon="https://snapp.ir/assets/images/snapp-services/pay.svg" head="سرویس اعتباری" head2="پرداخت با اسنپ"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/Moving.png" head="اسباب‌کشی منزل" head2="حمل و نقل با اسنپ"/>
      <Box icon="https://jek.snapp.ir/Redesign-Icons/Service%20Icon.png" head="سرمایه‌گذاری" head2="خدمات غیر حضوری بورس و سرمایه‌گذاری"/>
      <Box icon="https://web-cdn.snapp.ir/snapp-website/images/ticket/ticket-icon.svg" head="اسنپ تیکت" head2="خرید آنلاین بلیط با اسنپ"/>
    </div>
    <div className="ghaza-img">
      <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Food.jpg" alt="food" />
    </div>
    <div className="super-snap">
      <div className="super-text">
      <h1>سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h1>
      <p>اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.</p>

      </div>
      <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/super-app.jpg" alt="super snap" />
    </div>
    <div className="kos"></div>
   </div>
   </>
  );
}

export default App;
