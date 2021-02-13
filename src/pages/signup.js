import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Image, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, Section, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"signup"} />
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
		<Section quarkly-title="Navigation" background="#427fd7">
			<Override slot="SectionContent" background="rgba(30, 98, 172, 0)" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--lead">
					Wellbeing Associates
				</Text>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
				</Menu>
			</Box>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
			quarkly-title="Body"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--grey"
				margin="0px"
			>
				tools for autism diagnosis
			</Text>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				max-width="850px"
			>
				Autism Mapper
			</Text>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
				</StackItem>
				<Image width="500px" src="https://uploads.quarkly.io/6027e42b8954e5001ef162c7/images/vector-creator(11).png?v=2021-02-13T14:56:27.489Z" />
			</Stack>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<StackItem quarkly-title="Sign In or Register">
						<Button quarkly-title="Sign In Button">
							Register
						</Button>
						<Hr background="rgba(167, 32, 32, 0)" border-width="10px" border-color="rgba(25, 114, 203, 0)" />
						<Button quarkly-title="Login Button">
							Login
						</Button>
					</StackItem>
				</StackItem>
			</Stack>
			<Hr />
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