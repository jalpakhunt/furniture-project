import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Row,
  Col,
} from "reactstrap";
import "./Productform.css"
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const options = [
  { value: "chair", label: "Chair" },
  { value: "table", label: "Table" },
  { value: "sofa", label: "Sofa" },
  { value: "tvStand", label: "TV-Stand" },
];
export const Product = ({
  modal,
  toggle,
  formData,
  index,
  setFormData,
}) => {
  const [productData, setProductData] = useState({});

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange", values: formData });


  const onSubmit = (data) => {
   
  };



  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-wrap">
            <Table>
            <tbody>
              
         
              <tr >
                <td className="d-flex flex-column">
                  <label>Title</label>
                  <input
                    className="border-1 rounded "
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        title: e?.target?.value,
                      })
                    }
                    {...register("title")}
                  />
                </td>
                <td className="d-flex flex-column">
                  <label>Description</label>
                  <input
                    className="border-1 rounded "
                    {...register("description")}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        description: e?.target?.value,
                      })
                    }
                  />
                </td>
                <td className="d-flex flex-column">
                  <label>Brand</label>
                  <input
                    className="border-1 rounded "
                    {...register("brand")}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        brand: e?.target?.value,
                      })
                    }
                  />
                </td>
                <td className="d-flex flex-column">
                  <label>Gender</label>
                  <select className="border-1 rounded " {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                  </select>
                </td>

                <td className="d-flex flex-column">
                  <label>Price</label>
                  <input className="border-1 rounded " {...register("price")} />
                </td>
                <td className="d-flex flex-column">
                  <label>Image</label>
                  <input
                    className="border-1 rounded "
                    {...register("thumbnail")}
                  />
                </td>

                <td className="d-flex flex-column">
                  <label>Discount</label>
                  <input
                    className="border-1 rounded "
                    {...register("discountPercentage")}
                  />
                </td>
                <td className="d-flex flex-column">
                  <label>Category</label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        isMulti
                        {...register("category", {
                          required: true,
                        })}
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={(e) => onChange(e)}
                      />
                    )}
                  />
                </td>

                <td className="d-flex flex-column">
                  <label>Available Color</label>
                  <input className="border-1 rounded " {...register("color")} />
                </td>
                <td className="d-flex flex-column">
                  <label>Available Size</label>
                  <input className="border-1 rounded " {...register("size")} />
                </td>

                <td className="d-flex flex-column">
                  <label>Available stock</label>
                  <input
                    className="border-1 rounded "
                    {...register("availableStock")}
                  />
                </td>
              </tr>
              </tbody>
            </Table>

              <Button className="mt-3 w-100" type="submit">
                Submit
              </Button>
              <Button
                className="mt-3 w-100"
                type="submit"
                onClick={() => updateHandler()}
              >
                Update
              </Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

/*
{
  title: String,
  description: String,
  brand: String,
  gender: {
    type: String,
    enum: ["male","male", "female", "kids"],
  },
  price: Number,
  images: [String],
  thumbnail: String,
  discountPercentage: Number,
  category: { type: [String] },
  color: { type: [String], default: ["red", "black", "white"] },
  size: { type: [String], default: ["44", "45", "42", "43"] },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  availableStock: Number,
  rating: { type: Number, default: 0 },
  totalRaters: { type: Number, default: 0 },
  totalSoldUnit: { type: Number, default: 0 },
},
{ timestamps: true }
*/
