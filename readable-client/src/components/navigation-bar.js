import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";

class NavigationBar extends Component {
	render() {
		const { categories } = this.props;

		return (
			<Navbar collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<LinkContainer to="/">
							<a>Udacity Readable Project S2!</a>
						</LinkContainer>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to="/">
							<NavItem>Posts</NavItem>
						</LinkContainer>
						{Object.values(categories).map(category => (
							<LinkContainer to={category.path} key={category.path}>
								<NavItem>{category.name}</NavItem>
							</LinkContainer>
						))}
						<NavItem href="https://github.com/dkrefta/reactnd-project-readable-starter">
							Github Diego Krefta
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps({ categories }) {
	return { categories };
}

export default connect(mapStateToProps)(NavigationBar);
