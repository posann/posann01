const { PiLinkedinLogo, PiGithubLogo, PiArticleMedium, PiEnvelope, PiYoutubeLogo, PiArrowCircleLeft } = require("react-icons/pi");

const SOCIAL_MEDIA = [
    {
        name: 'Back',
        url: '/',
        icon: <PiArrowCircleLeft className="text-neutral-100 text-xl"  />
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/posann/',
        icon: <PiLinkedinLogo className="text-neutral-100 text-xl"  />
    },
    {
        name: 'Github',
        url: 'https://github.com/posann?tab=repositories',
        icon: <PiGithubLogo className="text-neutral-100 text-xl"  />
    },
    {
        name: 'Medium',
        url: 'https://medium.com/@posann',
        icon: <PiArticleMedium className="text-neutral-100 text-xl"  />
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/@codelebes',
        icon: <PiYoutubeLogo className="text-neutral-100 text-xl"  />
    },
    {
        name: 'Email',
        url: 'mailto:achmd.fznn@gmail.com',
        icon: <PiEnvelope className="text-neutral-100 text-xl"  />
    }
]

export default SOCIAL_MEDIA