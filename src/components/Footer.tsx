import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-10 pt-20" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-2xl sm:text-3xl md:text-4xl font-anton inline-block mt-5 mb-10 hover:underline hover:text-primary transition-colors"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="flex items-center justify-center gap-6 mb-8">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors capitalize"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="">
                    <p className="leading-none text-muted-foreground text-sm">
                        Built by Keshav Dadhich
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
