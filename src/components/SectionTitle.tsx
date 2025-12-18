interface Props {
    title: string;
}

const SectionTitle = ({ title }: Props) => {
    return (
        <h2 className="text-2xl md:text-3xl font-anton text-muted-foreground mb-10 md:mb-16 uppercase tracking-wider">
            {title}
        </h2>
    );
};

export default SectionTitle;
