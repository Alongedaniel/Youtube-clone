import React from "react";
import shorts from "../Images/shorts.png";
import ksi from "../Images/ksi.jpeg";
import logan from "../Images/logan.jpg";
import boss from "../Images/boss.jpg";
import sidemen from "../Images/sidemen.jpeg";
import reacts from "../Images/reacts.jpg";
import p2 from "../Images/p2.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <Link to="/" className="sidebar-item">
          <span className="material-symbols-rounded icons">home</span>
          <p>Home</p>
        </Link>
        <Link to="shorts" className="sidebar-item">
          <img className="icon" src={shorts} alt="" />
          <p>Shorts</p>
        </Link>
        <div className="sidebar-item">
          <span className="material-symbols-rounded icons">subscriptions</span>
          <p>Subscription</p>
        </div>
        <div className="border"></div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">video_library</span>
          <p>Library</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">history</span>
          <p>History</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">slideshow</span>
          <p>Your Videos</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">schedule</span>
          <p>Watch Later</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">download</span>
          <p>Downloads</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">thumb_up</span>
          <p>Liked Videos</p>
        </div>
        <div className="border"></div>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-section-header">Subscriptions</p>
        <Link to="jjchannel" className="sidebar-item">
          <img className="sidebar-image" src={ksi} alt="" />
          <p>JJ Olatunji</p>
          <div className="dot"></div>
        </Link>
        <div className="sidebar-item">
          <img className="sidebar-image" src={logan} alt="" />
          <p>Logan Paul</p>
          <div className="dot"></div>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-image" src={boss} alt="" />
          <p>MrWhoseTheBoss</p>
          <div className="dot"></div>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-image" src={sidemen} alt="" />
          <p>Sidemen</p>
          <div className="dot"></div>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-image" src={reacts} alt="" />
          <p>Sidemen Reacts</p>
          <div className="dot"></div>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-image" src={p2} alt="" />
          <p>P2isthename</p>
          <div className="dot"></div>
        </div>
        <div className="border"></div>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-section-header">Explore</p>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">mode_heat</span>
          <p>Trending</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">music_note</span>
          <p>Music</p>
        </div>
        <div className="sidebar-item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABcElEQVR4nO3UP2sUYRAG8FUC8aw0epWxi2BnYZvKPyixSRHSp/ELCAYCwpX3AQQVC0EtxFa0sgwIQVPkG4QgJoWKURMR9ScvzMre8t5l1+qKPM3CzDPzzDt/tigOMVbANJ7gCx7iTIOYs3iEb7iPbo50HMvYNYjv6ONEJuZk+PZqMV/Rw2RJPIKNCuEVruIZ/oTtI27hGDq4jU/h+42nuISXlTyrpcBkGFKya7UqL+J1JWgTW7ViLtRirofvZ13g14g+X8G7SuK1VPEQ7tFGAmWmYjBwHjdSW2vc1HPxHS2A2Rh4ieVkG/a6/xEoyVX0Rgm0alH0O61fiX6yHVR5I4F/u5uZQQuBTl1gAj/C+AErmCpaAqdxB9uR63PVOYe3lbaks7+LmQaJz+FeXH2JN7icI6cNeh7tKq/0RW4GcYSPm3BzQufxAPu1qhawGIfW+rU5oW7cwfvM6u7EkE+1TpwR6uBm/BTXsVTduEOMN/4CKEcZqvEFpeYAAAAASUVORK5CYII="
            alt=""
          />
          <p>Gaming</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">feed</span>
          <p>News</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">sports_tennis</span>
          <p>Sports</p>
        </div>
        <div className="border"></div>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-section-header">More from YouTube</p>
        <div className="sidebar-item">
          <img
            className="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/klEQVR4nO2YS2sTURiGn0a04iKlCtJNt90Udd9V3cdl/0C1RVToXyhU1KKb/oVoNwU3SlQoCl5XRRdewHYlit0UbzQUs8gjAxMIgZhJMkkmel54N4eZ870PzJzLB0FBQUFBQf+DhBPCGeGccEVYFe4IJeGV8EH4KnyLfSAY+6BuPHrmvfAyfve2cF24HM8d1TieRuCcsCA8Ecp1Yfrlclz7gjDSbvgjwqMBhLaJHwiH2wG4lYHQNng1afijwo8MBLbBP4VjSQBmMxDWJj6bBGA+A0Ft4oUkACsZCGrH/4Gw3lWRzU2dnu4VwN0kAE+7KhKpUtG1NR0bSxvgTRKA110D1LS3p0tLmsulBfAlCcDH1ABq2trSmZk0AH633JUjytQBIlWrurGhk5PdQoy2AvjeE4Ca9vd1eVlHRzutkW8FUOkpQE07Ozo310mNk9kA2N7WQqGTGuPD/AlVhUOD+4mLRZ2Y6Hxu+PXX8EOwjH7u70a2u6uLi2luZG/7e5TI59MKbuwXvT/MlUo6NZV2cGOvD/txemXYLzTzw36lnP33L/WRhJsZCGyDb9BmY+thBkIbu9RWYyuGGBHOD7i1+DheVNprLTYBGhdOCQXhonBVKAr3hGfRLil8qmvi1kOX68ajZ94Jz4X7cXP3mnApnvt0Ks3doKCgoKAghkB/AP70hTNI/HhQAAAAAElFTkSuQmCC"
            alt=""
          />
          <p>YouTube Premium</p>
        </div>
        <div className="sidebar-item">
          <img
            className="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB4UlEQVR4nO2ZPUvkQByHHy3WgI3XiDbiS2+pn0F0wffC7f0Cehx4hVtaWqud9haWtqIIViq+4lcQ14W18n7HcAkcYXfNJHGdkfzgX4XNPE92Mkn+A0WKFCkSRRAIrgRqUeZYgKsRTLaBj2oCVyOoJBBYwdUIqgkENnE1goMEAvu4GEGX4DqBwNVXwP0WbAvGW4AvC+4TwEd1J1g0v21yvvFwrI284MuxwS8Eq4JewZjg3AI8XmeCEUGPYElwHDs+kxW+1ObK1gWNDPBRvYXnanbMjF3KIvAzB8CstZ4Wvl/w4oDAq2AwjcCeA/AKa9cW/ofg3QFwhWVY+mwEzNJ4mGqwoyNpdDRvgcNmS24SiV/W/4RJoyFVq1IQZAX/I9gSdFvBx0SmBM9WAlGenqRyOS18TTCbGjwmMRSuBnYCUeynVd08JHOB/0/iMbWA/bS6zxU+FKhnErCbVvXPEHjtoEDtMwQevJ1C+ncT17y8ifW1y+hcFnB/H2Ty/VVCvr/MmZhXWAfAFdYOnn/QDFgLhBLrDgispYL/Fh/1Jqa10aatYloipxngTwTDbdoq03SosbUguLUAvxHMtxgr38aWTT7YG4jqElcjn5u736W9XvF9g2PS9y2mwOtNviJFitDx/AUDJbJzi5uh4gAAAABJRU5ErkJggg=="
            alt=""
          />
          <p>Creator Studio</p>
        </div>
        <div className="sidebar-item">
          <img
            className="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaElEQVR4nO1ZS0tbQRQ+mLZKQRd9rDR16wMFlcb4G9SVilrB/+ADUvwBKmjctKLStbooGsHaTX+EtNiFiol9CKbW7gQtyFc+7tim0WvO3FxvFDJwYMjMnPm+ueecOXMiUmzFVmx5N4iEINIGkTGIrEDkM0R+QeS3Efa3zBjnRCFSchuAhyEyCZHvEIGlfIPIBESqCgH8KUQWIHLmAXi2nEFkDiJPggL/AiLHPgDPlp8Q6btJ4Pch8uYGgCNL5rmX3+AfQuR9AOBhZIN7+nnyQYKHkQ8QeeAHgSDMBi4yly/4gQKCh5Fer+AfQ+TI06Z1dcDAADA05Aj7/M0bgWNPIdbEef1GpaXAyAiwuwskk8DiIhCPO8I+f+PY8LAz147ErC34KqtLqrUVSKWA1VWgudl9Hsc4h2S4RtQEiOWZDYFJtfLubiCdBjo69IA4l2u6umxITGjBl5g8RXfyBNLYaG/bXJNO23wJ5lshDYE2tc3TbGxO/qovkUza+EREQ2BMpYzOSHu+amx9Haiu1oFKJBxdOgIvNQRWVcp2dtwdlu3kBIjFgFDoej0tLY4uHYG3GgJbORUxpvPTu41nts1NIBK5Xl8qBdTWagh80hDInSr39wNLSzoCbOfnwMICUFFx9fzlZaCvT0PgSEMgd/wfHQWmpvQELtrBATA4eHn+9LRzCeYmcOoPAW7GTb0Q6Om5PD8e1zryqX8mxPTA1oTKywMxoa2ciurr/XXi/X1fnVgXRpmYNTX5E0a3tzXg1WFUd5HRkVdW3C+ncFgHam3NSbl1BGIaAlGVsrIyJ363t2s3vyydncDenk0q8VybzH1VKYxGnYSsocEePNccHub2j3/yRV3NMxUznWKGRdt0midvn06Pq8B7ftAwKtH26ZRu8zhGm+dc/cmD8R8ilWoChgTLffpNaMe8jJiY0TeYaszMOMI+QyXH6LD2T8pXVuANgUeeH/WM6bzsLh717NfU2OuRvyVHb3VT1io9buqn9HgCn0FivoDgX+cFPuPPi0QBwL+DyL28CWQUdzcCBL/uW3E3q8g7F4TZwK+TdyHS6zk6XS8/8nZYy7rprLlg8gV+yjjPsB0I+CwilSbt0OVO/wvXjFvfsDdEhAlghHUb5ux8eJiX3ZkR9j+asRizylvxN2uxFZvc/fYHN7rWRI96nfYAAAAASUVORK5CYII="
            alt=""
          />
          <p>YouTube Music</p>
        </div>
        <div className="sidebar-item">
          <img
            className="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE1ElEQVR4nO2ZbYhVVRSG32c+7tx7zlzvNXNSs7F0Ch2xoNLQiRSypiIJIUxTKys0AhPUTMofZjVKSiMRRGZWYIhiWJikKKaiaMcfQpGk/QghIyp1xvmyUWfFHm/ifDrec8cZ6L7w/l37WWfvvfY+a0tZZZVVVv9XRSUVSbpd0j1XeLSkeyUNVS9RsaTJ+bA8ATsS8EsUanPhog/1RVA9BKpvhephUDUSTg2FqgTUxeB0nrRAUu71gkXSyBxpbhK2R6E6CTVjoWa2dHG5ZJ9JtkOyoAveKNlwqC2E9anYGVeepDF50sIbYE8Uam6G6slQ72C3dxE06MR7JRsCtTnSM5kAdl9hTL60rC8cLoAGN/VToHGlZDszABy0488li8HfkgrSBS/1YW0MzgyEszOg8QPJ9nQTcNCO74NqSTOuFbwsAQeSUDtHOv/VdQQOWvl9yRJwsKvgXhQ+9aF2qdR0sAfBg5Qdgwd1kgZcDb6/Bz9PhLpdvQA8uMLlcFbSK53Bxzw4Pgsaexo2aMeuUCRgf4f0PnxcDvU9DRp04N2SReCcpEh7/CWFULe7F4AGnfg2OCNpQtu1AxUz4Z90Az+fl2fLrkNpfRoacqQ32iSQgB8+ChF4kO/b3aNGWTwatYnxuL15DVeG4BpcIVlf2NkmAXfB+i5E4FG+b5u2bbNDR49axerV9vCECZbwPCtNJGxWQYF9KNn+DCTw5aVy+lebBPJDVp4JkYitXrPGjp48edk/njhh67dssTlz51ppSYl5kYjdn0zaYrBv0xzne8kKLm3kvhlN4CmwRfPnt0igtfcdOWLvVFbao+XllvQ8K/O8tMYqhip3J2uRgCtPYabYbeDHRo/uNIH/vGHrVitKJOy13Ny0xiqDGknTW1eh6jCb7mvJ+nveVeHdMuvn+/ZeiLGmQxPSshYJxOG3DSE32E35+bb9wIEO4ecvWmQDPc++CDnOq5LFYXOLBPrB3hUhAz8BtmTx4jbgbjNPmzrV7vB92xpyjEBqnr0kHG6RQCFUviQ1hQ1cNmJEC/jDx47Z+HHjrMz3LUyZDq6wWylxONm6ks4cD2fDBHZFoG802gzt4HceOmQlxcU2LRq1QxmCD6TmDxGBhtYJFPvQEHag8Z7XvFE3bttmRcmkLUyz0gSd2DHmQJOknBYZ9IFf14YMvkCy0uHDmytNZYbBg5TdfSsXLrTpVMRgxbNwPkzwzZINKyiw9d0EH0i2TrJC+KPNdcJ1xdxPe3cNnCk/Ao2FsKq9BHDdsE29ADLowPOki4Xwuzu62kvALaNP5kgXeho0aOUtko2Fsz4cl3SLOtFDrlnV08CBZAdSZ8sDUOXBqYi02N07dRXluXtRJk7MdLxDsrcurfPaGDQk4YikKV0Bv6w+sO5l6eL1AN4s2VLJHoeqAXA6AnVJ2JEjvShpsNLUne5Q294N69g1fafDOddGj0F9HE6kus8vuM52m8MpXcWkikFQvyVN2G8ke1ey5+D8KKhyy8FVuD6wK0daIulBN9nqTkWkeTGonQR17p92XwctP/efukqy2dKF0VAdhzrXandNqHx4W9IkSQPVQyqKSK/3gZ/yoNE1egfDmRuhxr2w5MF5H/50sAWwUtKTkoaolyqSejK6K/WGNTj11pVVVlllpbT0L86g5LiB0CeRAAAAAElFTkSuQmCC"
            alt=""
          />
          <p>YouTube Kids</p>
        </div>
        <div className="sidebar-item">
          <img
            className="icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEyElEQVR4nO2YX0xbZRjGn4dWKIVSCw1siFMcAhodM0OCGkdmxhhosgBOg4rZboaZBqNmiSI6HTegy7zQaKJuJG7o2EBwurlwjF5oDHFhZokiF8wx0G3Uyb9lrOPfaw5tldRz6NbT2iX2SZ6k7el53+eXc77vfOcDoooqqqiiipSWAs51QPEGoLoCqK4GKqqAomeA3Lr5wwFlLgYyy4DVZUBVGfBcMdBYCuzydwXQ2ACsDlQwL438OYmcSSZnl5JTmeTkbeToSvLc3eSpFeRANulykJcTSMkkJYeUbFKWkbKEFBspcaSQFKvn+5y/48k5MynXk5JBSi4p+aQU6fgeUlJIeR7YqRfebiaHtwFzbYC0AtIMyLuANAGyHZBtgLwCSCMg+wBRrsCHAOnQ8KErPF9Z4NcAySJnBKAWwLoU8vjVFv0v3QWIhZQXgFQtgGIHeSzSIZUAVm/PJ4HlWgD3JZInIh1QCWAHKY8Bd2oBrLSQfZEOqARwKimPA4VaAFlm8lSkAyoBnO65Amu0ANJjyHNGG9R5B1u4AJaR8ghQpgWQRHLcaINYs1l+qKkRJSYmLACZHoBKLQATyZkuYM5IA2tsrPT390tPa6uUOp3ydogBsknZCFRrAYDkbBcwY6SB3WKRsbExmZ2dlX1798pNaWlSYrMF9eBSNHy7B2CLHsD0UeCykQYZdrtMT0+LT263W95sapLt5eWiJCQYBlhBSgXwrB6A+zBwyUiDstxc0dLg4KC8XFsrT+XkzC9Pgq2fT0o5UKcHMHkYuGgEoL6kRBZTd3e3PLp+vbyUlSVtQdQvJGUD0KAHcOEz4EKw4Y8C8l5V1aIAExMT8m1Li+zJy5POIHrcT8pDeitSdRrtAIKeSj8H5INNmzSDq4N6qLdXvt68WRSTKegr/AApDwLv6AGMtAMjwRb/FJDKgoJ/hT87NCTH6uulIzHR8EOuhJRS4EM9gPNtwJ/BFj+iPimdzr+DT01NScuOHfJ0auo8nJHgygKAYuB9XYCDwHkjDYpycqSvr0+eqKyUN/Lz5a0QBVe8XkNKCbBLD8B1wCBAfkaGpFitUmMyzV8RJcQuJGUt8KIewPB+wGWkQQMg7WEIrixYShQD5YsBDIereSicTMq9Om9kKsDZT65xABMp6sJTF2A/YPidIFw+oi7XPQDaIjnQDPwU6aCKjtWxZSNnFgNoKwD2dAHToWjYAbjbgVHVB4HRZuDMbmDQ54+B0+qxTmC0C5gKVG8rMJNG9ugCALiV5K9mstdGHneQPT4vIb/LIL9PJ7uTyR/V3+zkCSv5SzzZG0sOmMnfYsgxdVWr7srR83nEaxfJk34+4z027v3//Dkx5GgM6TKTp83koIXstZAnTeQAgGwEkBmebQt1pLtAj8MYCM8r3O+34oArPJaLXwzAAcAC4KX3VsjDcAtXt8F4A7dwXsN6TpveFtYqseTA7HkxVA4jpz02UqObwX21AKtrwMtq4DmcORPdpKjWhu1Rt3pN1hfBXarc0qoAZY7yImrmYW6AgT/SMPqW1oS6UIYZLWTv38JfKUA7V8AB24gh+NJt8XjS3H/zD4+zy28VfxvowTyD39vAXbayG8QJqXDs7Xt8A64G9Vby/vd56iiiiqq/5H+ApdVx0uHLBiAAAAAElFTkSuQmCC"
            alt=""
          />
          <p>YouTube Tv</p>
        </div>
        <div className="border"></div>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">settings</span>
          <p>Settings</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">flag</span>
          <p>Report History</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">help</span>
          <p>Help</p>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined icons">sms_failed</span>
          <p>Send Feedback</p>
        </div>
        <div className="border"></div>
      </div>
      <ul className="sidebar-footer">
        <li>About</li>
        <li>Press</li>
        <li>Copyright</li>
        <li>Contact Us</li>
        <li>Creators</li>
        <li>Advertise</li>
        <li>Developers</li>
      </ul>
      <ul className="sidebar-footer">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Policy& Safety</li>
        <li>How YouTube Works</li>
        <li>Test new features</li>
      </ul>
      <p className="copyright">&copy; 2023 Googlee LLC</p>
    </div>
  );
};

export default Sidebar;
