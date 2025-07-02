export default function Footer() {
  const twitterLink = 'http://www.x.com/viniciustixuu';

  return (
    <footer>
      This website was created by: 
      <a href={twitterLink} target='_blank' rel='noopener noreferrer'>
        Tixu
      </a>
    </footer>
  );
}
