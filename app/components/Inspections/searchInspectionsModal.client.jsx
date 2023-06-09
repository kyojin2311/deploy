import { Modal } from "flowbite-react";
import { Form, useActionData, useNavigate } from "@remix-run/react";
import { Alert } from "flowbite-react";
export default function SearchModal(props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    return navigate("/");
  };
  const data = useActionData();
  return (
    <Modal show={true}>
      <Modal.Header onClick={clickHandler}>
        <div>Searching Inspections by RegisNum</div>
        {data ? (
          <Alert color="failure">
            <span>
              <span className="font-medium"></span> {data.message}
            </span>
          </Alert>
        ) : (
          ""
        )}
      </Modal.Header>
      <Modal.Body>
        <Form method="post">
          <label
            htmlFor="InspectId"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
            </div>
            <input
              type="search"
              id="InspectId"
              name="InspectId"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter validable Registration Number"
              required
            />
            <button className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
