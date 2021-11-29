import { signOut } from "next-auth/client";
import { IconButton } from "@chakra-ui/button";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";

const LogoutButton = () => {
  return (
        <IconButton
          icon={<ArrowRightIcon />}
          aria-label="Logout"
          color="black"
          onClick={() => signOut()}
        ></IconButton>
  );
};

export default LogoutButton;
