import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  useMediaQuery,
} from "@material-ui/core";
import { Filters } from "../types";
import { connect, useDispatch } from "react-redux";
import { addFilter } from "../redux/actions/filter"

const useStyles = makeStyles({
  formControl: {
    minWidth: 130,
    marginRight: "20px",
    marginTop: "10px",
    marginBottom: "10px",
  },
});

interface Props {
  filters: Filters
}

const Filter: React.FC<Props> = ({filters}) => {
  // const [filter, setFilter] = useState<Filters>(filters);
  const dispatch = useDispatch();
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 1024px)");
  const handleChange = (
    e: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ) => {
    const { name, value } = e.target;
    dispatch(addFilter(value, name));
  };
  return (
    <>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel id="experience-label">Experience</InputLabel>
        <Select
          labelId="experience-label"
          id="experience-label-select"
          name="experience"
          value={filters.experience}
          onChange={handleChange}
        >
          <MenuItem value={""}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={"beginner"}>Beginner</MenuItem>
          <MenuItem value={"intermediate"}>Intermediate</MenuItem>
          <MenuItem value={"pro"}>Professional</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel id="sortBy-label">Sort By</InputLabel>
        <Select
          labelId="sortBy-label"
          id="sortBy-label-select"
          name="sortBy"
          value={filters.sortBy}
          onChange={handleChange}
        >
          <MenuItem value={"relevance"}>Most Relevant</MenuItem>
          <MenuItem value={"recent"}>Most Recent</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel id="typeOfSport-label">Sport Type</InputLabel>
        <Select
          labelId="typeOfSport-label"
          id="typeOfSport-label-select"
          name="typeOfSport"
          value={filters.typeOfSport}
          onChange={handleChange}
        >
          <MenuItem value={""}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={"indoors"}>Indoors</MenuItem>
          <MenuItem value={"outdoors"}>Outdoors</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
const mapStateToProps = (state: any) => ({ 
  filters: state.filters
});
// export default Filter;
export default connect(
  mapStateToProps,
  {
    addFilter,
  }
)(Filter);
