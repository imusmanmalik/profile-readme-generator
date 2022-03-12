import * as S from './styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <S.Container>
      <Link href="/result" passHref>
        <S.GenerateLink>Generate README</S.GenerateLink>
      </Link>
    </S.Container>
  );
};

export { Footer };
