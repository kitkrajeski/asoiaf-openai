export function Typography({ variant, children }) {
  switch (variant) {
    case "title":
      return <h1 className="typography title">{children}</h1>;
    case "sub-title":
      return <h1 className="typography sub-title">{children}</h1>;
    case "heading":
      return <h1 className="typography heading">{children}</h1>;
    case "subheading":
      return <h3 className="typography subheading">{children}</h3>;
    default:
      return <p className="typography body">{children}</p>;
  }
}
