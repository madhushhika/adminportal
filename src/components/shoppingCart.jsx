import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class ShoppingCart extends Component {

  render() {
    return (
        <div>
        <Button id="UncontrolledPopover" type="button">
          Launch Popover
        </Button>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </UncontrolledPopover>
      </div>
    );
  }
}

export default Products;