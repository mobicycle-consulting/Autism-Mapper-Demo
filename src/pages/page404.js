import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Autism Mapper
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/Autism_Mapper_cmyk_2_2_-removebg-preview.png?v=2021-02-13T14:41:24.401Z"} />
			<meta name={"msapplication-TileColor"} content={"#134df4"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1555861496-0666c8981751?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Autism mapper demo
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Ooops! We are working on the problem
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});