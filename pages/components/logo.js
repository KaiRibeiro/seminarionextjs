import Link from "next/link";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &hover img {
    transform: rotate(20deg);
  }
`;

export default function Logo({ children, router }) {
  const nextLogo = `/images/nextlogo.png`;

  return (
    <Link href="/home">
      <a>
        <LogoBox>
          <Image src={nextLogo} width={20} height={20} alt="logo" />
          <Text color="black" fontWeight="bold" ml={3}>
              Seminário NextJs
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
}
