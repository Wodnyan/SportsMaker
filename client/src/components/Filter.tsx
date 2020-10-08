import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles({
  formControl: {
    minWidth: 130,
    marginRight: "20px",
    marginTop: "10px",
    marginBottom: "10px",
  },
});

interface Filters {
  experience: string;
  sortBy: string;
  typeOfSport: string;
}

const Filter = () => {
  const [filter, setFilter] = useState<Filters>({
    experience: "",
    sortBy: "relevant",
    typeOfSport: "",
  });
  const classes = useStyles();
  const matches = useMediaQuery("(min-width: 1024px)");
  const handleChange = (
    e: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>
  ) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name as string]: e.target.value,
    }));
  };
  return (
    <div>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel id="experience-label">Experience</InputLabel>
        <Select
          labelId="experience-label"
          id="experience-label-select"
          name="experience"
          value={filter.experience}
          onChange={handleChange}
        >
          <MenuItem value={""}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={"beginner"}>Beginner</MenuItem>
          <MenuItem value={"intermediate"}>Intermediate</MenuItem>
          <MenuItem value={"pro"}>Pro</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel id="sortBy-label">Sort By</InputLabel>
        <Select
          labelId="sortBy-label"
          id="sortBy-label-select"
          name="sortBy"
          value={filter.sortBy}
          onChange={handleChange}
        >
          <MenuItem value={"relevant"}>Most Relevant</MenuItem>
          <MenuItem value={"recent"}>Most Recent</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl} variant="filled">
        <InputLabel id="typeOfSport-label">Sport Type</InputLabel>
        <Select
          labelId="typeOfSport-label"
          id="typeOfSport-label-select"
          name="typeOfSport"
          value={filter.typeOfSport}
          onChange={handleChange}
        >
          <MenuItem value={""}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={"indoors"}>Indoors</MenuItem>
          <MenuItem value={"outdoors"}>Outdoors</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default Filter;
