import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Theme, withStyles } from "@material-ui/core/styles";
import background from "../../images/background.png";
import {StoreState} from "../../reducers";
import {searchWord, Word} from "../../actions";
import {connect} from 'react-redux'
import FoundWord from "./FoundWord";

interface Props {
  handleSubmit: any;
  classes: any;
  searchWord: typeof searchWord;
  Word: Word | string ;
}


class Dictionary extends Component<Props> {

  constructor(props: Props) {
    super(props);

    this.state = {Word: ""};
  }


  renderError(meta: any) {
    if (meta.touched && meta.error) {
      return <div style={{ color: "red" }}>{meta.error}</div>;
    }
  }

  renderInput = (formProp: any) => {
    return (
      <div>
        <TextField
          {...formProp.input}
          id="filled-basic"
          label="Search  a word"
          variant="filled"
          fullWidth
          color="primary"

        />
        {this.renderError(formProp.meta)}
      </div>
    );
  };

  onSubmit= async (formValue: any) => {
      this.props.searchWord(formValue.Search);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <form  onSubmit={this.props.handleSubmit(this.onSubmit)}  className={classes.bodyContent}>
            <Field
              style={{ width: "200px" }}
              name="Search"
              component={this.renderInput}
              label="Search word"
            />
            <Button
              className={classes.searchButton}
              style={{
                float: "right",
                backgroundColor: "#00b2bf",
                color: "white",
              }}
              variant="contained"
              onClick={this.props.handleSubmit(this.onSubmit)}
            >
              Search
            </Button>
            <img src={background} style={{height: "auto", width: '100%'}}/>
          </form>
        </Grid>
        <Grid item md={6} xs={12} style={{ paddingLeft: "15px" }}>
          <h1>Look at examples </h1>
          <p className={classes.moreInfoContent} >
            {this.props.Word ? <FoundWord Word={this.props.Word}/> :  null}
          </p>
        </Grid>
      </Grid>
    );
  }
}

const validate = (formValues: any) => {
  let errors = {
    Search: "",
  };

  if (!formValues.Search) {
    errors.Search = "You must fill form with a word";
  }

  return errors;
};

const useStyles = (theme: Theme) => ({
  bodyContent: {
    marginTop: "40px",
    '& label.Mui-focused': {
      color: '#00b2bf',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: '#00b2bf',
    },
  },

  searchButton: {
    height: "40px",
    marginRight: "10px",
    marginTop: "10px",
  },

  moreInfoContent: {
    [theme.breakpoints.up('md')]: {
      overflowY: 'scroll',
      height: "500px"
    },
  },

});

const mapStateToProps = (state: StoreState) =>{
  return {Word: state.Word}
};

export default connect(mapStateToProps, {
  searchWord
})(withStyles(useStyles)(
  reduxForm({
    form: "searchForm",
    validate,
  })(Dictionary as any)
));
