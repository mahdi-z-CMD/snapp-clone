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
    <div className="box-3">
      <div className="box-main">
        <div className="box-p">
          <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-eco.png" alt="money" />
        </div>
        <div className="box-texts">
          <h1>به صرفه</h1>
          <p>سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.</p>
        </div>
      </div>
      <div className="box-main">
        <div className="box-p">
          <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-fast.png" alt="money" />
        </div>
        <div className="box-texts">
          <h1>سریع</h1>
          <p>قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.</p>
        </div>
      </div>
      <div className="box-main">
        <div className="box-p">
          <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-easy.png" alt="money" />
        </div>
        <div className="box-texts">
          <h1>آسان</h1>
          <p>برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.</p>
        </div>
      </div>
    </div>
    <div className="sabtnam">
      <h1>در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</h1>
      <h2>بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید</h2>
      <input type="submit" value="ثبت‌نام رانندگان" />
    </div>
    <div className="video-page">
      <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/jazb-ranande-cover.jpg" alt="video poster" />
    </div>
    <div className="footer-1">
      <div className="foot">
        <div className="foot-texts">
        <h1>ساعت کاری دلخواه</h1>
        <h3>فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.</h3>
        </div>
        <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-hour.png" alt="saat" />
      </div>
      <div className="foot">
        <div className="foot-texts">
        <h1> درآمد تضمینی + پاداش‌های ماهانه و هفتگی</h1>
        <h3>با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.</h3>
        </div>
        <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-income.png" alt="saat" />
      </div>
      <div className="foot">
        <div className="foot-texts">
        <h1>کار‌فیکس</h1>
        <h3>باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.</h3>
        </div>
        <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-carfix.png" alt="saat" />
      </div>
      <div className="foot">
        <div className="foot-texts">
        <h1>مزایا و خدمات باشگاه رانندگان</h1>
        <h3>در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.</h3>
        </div>
        <img src="https://web-cdn.snapp.ir/snapp-website/images/homepage/180x100-benefits.png" alt="saat" />
      </div>
    </div>
    <div className="nothing">
      
    </div>
   </div>
   </>
  );
}

export default App;
