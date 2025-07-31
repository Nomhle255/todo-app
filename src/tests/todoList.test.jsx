import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TodoList from "../components/todoList";
import mockData from "../mockData";


describe("TodoList", () => {
  test("renders todo items", () => {
    render(<TodoList todos={mockData} />);
     mockData.forEach((d) => expect(screen.getByText(d.title)).toBeInTheDocument());
  });
});
