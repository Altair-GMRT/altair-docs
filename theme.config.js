export default {
    useNextSeoProps() {
        return {
          titleTemplate: '%s - Altair'
        }
    },
    docsRepositoryBase: "https://github.com/Altair-GMRT/altair-docs/tree/main",
    logo: <span>Altair GMRT</span>,
    project: {
        link: 'https://github.com/Altair-GMRT/altair-docs'
    },
    footer: {
        text: (
            <span>
              Made with <span style={{ color: 'red' }}>❤</span> by Altair Team
            </span>
          )
    },
    i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: 'id-ID', text: 'Indonesia' },
    ],

}