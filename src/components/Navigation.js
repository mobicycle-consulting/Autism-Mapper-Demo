import React from "react";
import { useOverrides, Override, Menu, Section } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "Navigation",
	"background": "--color-grey"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0",
			"md-margin": "0px 0 20px 0",
			"text-align": "left",
			"font": "--lead",
			"children": "Wellbeing Associates"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {
			"display": "flex",
			"justify-content": "center",
			"font": "--base",
			"font-weight": "700",
			"md-flex-direction": "column",
			"md-align-items": "center"
		}
	},
	"menuOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"text-decoration": "none",
			"color": "--dark",
			"padding": "6px 12px"
		}
	},
	"menuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"color": "--primary"
		}
	},
	"menuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"padding": "6px"
		}
	}
};

const Navigation = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" background="rgba(30, 98, 172, 0)" />
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Menu {...override("menu")}>
				<Override {...override("menuOverride")} />
				<Override {...override("menuOverride1")} />
				<Override {...override("menuOverride2")} />
			</Menu>
		</Box>
		{children}
	</Section>;
};

Object.assign(Navigation, { ...Section,
	defaultProps,
	overrides
});
export default Navigation;