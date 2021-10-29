import React, { Component } from "react";

class Catering extends Component {
  componentDidMount() {
    document.title = "Catering";
  }
  render() {
    return(
      <div className="Catering">
        <h1>Contact Us</h1>
        <p>
            Do you need to place an online order? Fill out this form and we'll get you order ready! (Note: Please do not use this form to complain about the quality of our food.)
        </p>
        <form id="contact">
            <label for="fname"><p><strong>First Name:</strong></p></label>
            <input type="text" id="fname" name="fname" placeholder="Jim" />
            <label for="lname"><p><strong>Last Name:</strong></p></label>
            <input type="text" id="lname" name="lname" placeholder="Davis" />
            <label for="email"><p><strong>Email:</strong></p></label>
            <input type="email" id="email" name="email" placeholder="blah@gmail.com" required="required" />
            <label for="phone"><p><strong>Phone Number:</strong></p></label>
            <input type="tel" id="phone" name="phone" placeholder="777-7777" />
            <br/><br/>
            <textarea rows="16" cols="48" placeholder="What would you like to order?"></textarea>
            <label for="hashbrowns"><p><strong>Would you like a side of hashbrowns?</strong></p></label>
            <input type="radio" id="hashtrue" name="hashbrowns" value="true" />
            <label for="hashtrue">Yes</label>
            <br />
            <input type="radio" id="hashfalse" name="hashbrowns" value="false" />
            <label for="hashfalse">No</label>
            <br/>
            <input type="submit" value="Submit" />
        </form>
        <br/>
      </div>
    )
  }
}

export default Catering;