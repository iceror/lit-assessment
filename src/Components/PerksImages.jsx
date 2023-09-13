import remoteFriendly from '../assets/img/remote-friendly.png'
import unlimitedVacation from '../assets/img/unlimited-vacation.png'
import parentalLeave from '../assets/img/paid-parental-leave.png'
import latinxInTech from '../assets/img/latinx-in-tech.png'
import womenInTech from '../assets/img/women-in-tech.png'
import lgbtqi from '../assets/img/lgbtiq.png'

const PerksImages = ({perksArray}) => {
    return perksArray.map((perk, perkIndex) => {
      switch (perk) {
        case 'remotefriendly':
          return <img key={`perk-remote-${perkIndex}`} src={remoteFriendly} alt="Remote Friendly" />;
        case 'unlimitedvacation':
          return <img key={`perk-unlimited-${perkIndex}`} src={unlimitedVacation} alt="Unlimited Vacation" />;
        case 'paidparentalleave':
          return <img src={parentalLeave} alt="Paid Parental Leave" />
        case 'latinxintech':
          return <img src={latinxInTech} alt="Latinx in Tech" />
        case 'womenintecherg':
          return <img src={womenInTech} alt="Women in Tech" />
        case 'lgbtqierg-2':
          return <img src={lgbtqi} alt="LGBTQI+" />
        default:
          return null; // No image for unknown perks
      }
    });
}

export default PerksImages