import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LoadingSpinner } from "../components/LoadingSpinner";
import FetchData from "../hooks/FetchData";
import { ShowError } from "../components/ShowError";
import { AllServices } from "../components/AllServices";

function AllServicesContainer(props) {
  const api_url = `http://localhost:8000/services`;
  const [servicesData, { isLoading, isError }] = FetchData(api_url);
  const {
    user: { isFetching }
  } = props;
  return (
    <>
      {isError ? (
        <ShowError
          errorMessage="Ошибка данных :c"
          gif="https://media.giphy.com/media/kd3uvnVNZaFnXepecO/giphy.gif"
        />
      ) : isLoading || isFetching ? (
        <LoadingSpinner />
      ) : (
        <AllServices servicesData={servicesData} />
      )}
    </>
  );
}

const mapStateToProps = store => ({
  user: store
});

export default connect(mapStateToProps)(AllServicesContainer);

AllServicesContainer.propTypes = {
  user: PropTypes.object,
};