import React from 'react';

import {
    Container,
    Heading,
    Paragraph,
    Button,

} from './text-section.style'

export const TextComponent = () => {
    return (
        <Container>
            <Heading>
                Lorem Ipsum
            </Heading>
            <Paragraph>
                Duis nunc sem, aliquam eget dui non, eleifend ullamcorper enim. Mauris non vehicula elit, et fringilla risus. Sed quis auctor diam. Praesent lacinia orci in mi malesuada rutrum. Vestibulum quis condimentum purus, vitae eleifend ligula. Ut egestas mi vel finibus facilisis. Fusce vel est at dui sollicitudin vestibulum quis ut diam. Morbi dapibus, nunc id tincidunt convallis, arcu enim porttitor nisl, non pretium velit neque ut lorem. Maecenas posuere tellus id ligula consectetur, ut laoreet tortor iaculis. Maecenas quis mollis est. Nullam laoreet eu nibh quis semper. Mauris eu convallis turpis [...]
            </Paragraph>
            <div style={{marginTop: '.6rem'}}>   
                <Button>
                    Full Story
                </Button>
            </div>
            
        </Container>
    )
}

export default TextComponent;