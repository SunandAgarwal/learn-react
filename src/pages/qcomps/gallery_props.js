function Image({src, alt, size=100}) {
  return (
    <img
          className="avatar"
          src={src}
          alt={alt}
          width={size}
          height={size}
        />
  )
}

function ListElem({Head, content}) {
  return (
      <li>
        <b>{Head}</b>
        {content}
      </li>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <Image
          src = {'https://i.imgur.com/szV5sdGs.jpg'}
          alt = {"Maria Skłodowska-Curie"}
          size = {70}
        />
        <ul>
          <ListElem
            Head = {"Profession: "}
            content = {"physicist and chemist"}
          />
          <ListElem
            Head = {"Awards: 4 "}
            content = {"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"}
          />
          <ListElem
            Head = {"Discovered: "}
            content = {"polonium (element)"}
          />
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <Image
          src = {'https://i.imgur.com/YfeOqp2s.jpg'}
          alt = {"Katsuko Saruhashi"}
          size = {70}
        />
        <ul>
          <ListElem
            Head = {"Profession: "}
            content = {"geochemist"}
          />
          <ListElem
            Head = {"Awards: 2 "}
            content = {"(Miyake Prize for geochemistry, Tanaka Prize)"}
          />
          <ListElem
            Head = {"Discovered: "}
            content = {"a method for measuring carbon dioxide in seawater"}
          />
        </ul>
      </section>
    </div>
  );
}
