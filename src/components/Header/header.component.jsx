import React from 'react';

import logo from '../../assets/logo.png';

import {
        
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    Hamburger,
    Line

} from './header.style';

class Header extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        }
    }

    openMenu = (event) => {
		event.preventDefault();
		this.setState({ isMenuOpen: true }, () => {
			document.addEventListener('click', this.closeMenu);
		})
	}

	closeMenu = () => {
		this.setState({ isMenuOpen: false }, () => {
			document.removeEventListener('click', this.closeMenu);
		})
	} 


    render() {
        const { isMenuOpen } = this.state;

        return (
            <HeaderContainer>
                <LogoContainer to='/'>
                    <img alt='logo' src={logo} />
                </LogoContainer>

                <OptionsContainer isOpen={isMenuOpen}>
                    <OptionLink to="/"  >
                        LINK 1
                    </OptionLink>
                    <OptionLink to="/"  >
                        LINK 2
                    </OptionLink>
                    <OptionLink to="/"  >
                        LINK 3
                    </OptionLink>
                </OptionsContainer>

                <Hamburger onClick={this.openMenu}>
                    <Line />
                    <Line />
                    <Line />
                </Hamburger>

            </HeaderContainer>
        )
    }
}

export default Header;