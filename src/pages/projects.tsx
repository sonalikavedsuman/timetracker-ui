import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  PopoverContent,
  Popover,
  PopoverTrigger,
} from "@nextui-org/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { CheckIcon, PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onOpenChange: onOpenChange1,
   
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onOpenChange: onOpenChange2,
  } = useDisclosure();
  
  const [project, setProject] = useState({
    name: "",
    description: "",
    clientName: "",
    technology: "",
  });
  const [projects, setProjects] = useState<
    Array<{
      id: number;
      name: string;
      description: string;
      clientName: string;
      technology: string;
    }>
  >([]);
  const [updatedProject, setUpdatedProject] = useState<{
    id?: number;
    name: string;
    description: string;
    clientName: string;
    technology: string;
  }>({
    id: 0,
    name: "",
    description: "",
    clientName: "",
    technology: "",
  });


  useEffect(() => {
    // Fetch project data from API
    axios
      .get("https://localhost:7140/api/Project")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  /*const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProject((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };*/
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Use the updatedProject state if the updating modal is open, otherwise use project state
    const targetProject = isOpen2 ? updatedProject : project;
    // Update the corresponding property in the state
    if (targetProject) {
      isOpen2
        ? setUpdatedProject((prevDetails) => ({ ...prevDetails, [name]: value }))
        : setProject((prevDetails) => ({ ...prevDetails, [name]: value }));
    }
  };

  const handleSend = async () => {
    try {
      const response = await axios.post(
        "https://localhost:7140/api/Project",
        project
      );

      console.log("Project added successfully:", response.data);

      setProject({
        name: "",
        description: "",
        clientName: "",
        technology: "",
      });
      setProjects((prevProjects) => [...prevProjects, response.data]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const handleUpdate = async (projectId: number) => {
    try {
      // Find the project to update based on the provided projectId
      const projectToUpdate = projects.find((p) => p.id === projectId);

      if (!projectToUpdate) {
        console.error("Project not found for update");
        return;
      }

      setUpdatedProject({
        id: projectId,
        name: projectToUpdate.name,
        description: projectToUpdate.description,
        clientName: projectToUpdate.clientName,
        technology: projectToUpdate.technology,
      });
      onOpen2(); // Open the "Update" modal

    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleUpdateSave = async (projectId: number) => {
    try {
      
      const response = await axios.put(
        `https://localhost:7140/api/Project/${updatedProject.id}`,
        updatedProject
      );
    
      console.log("Project updated successfully:", response.data);
      // Update the projects state with the updated project
      setProjects((prevProjects) =>
      prevProjects.map((p) => (p.id === updatedProject.id ?  { ...updatedProject, ...response.data } : p))
      
    );
    
   
      onOpenChange2(); // Close the "Update" modal
      console.log("Updated projects state:", updatedProject);
     
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleDelete = async (projectId: number) => {
    try {
      await axios.delete(`https://localhost:7140/api/Project/${projectId}`);
      // Update the projects state by filtering out the deleted project
      setProjects((prevProjects) =>
        prevProjects.filter((p) => p.id !== projectId)
      );
      console.log("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return (
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
      <div className="flex flex-col mt-20 overflow-y-auto">
        <div className="flex flex-row pl-11 my-10">
          <span className="mr-unit-9xl font-semibold text-2xl">Projects</span>
          <div className="flex flex-row">
            <Button
              variant="bordered"
              className="rounded-md text-indigo-800 bg-slate-200 w-36 h-10 text-sm font-semibold "
              onPress={onOpen1}
            >
              ADD NEW
            </Button>
            <Modal
              isOpen={isOpen1}
              onOpenChange={onOpenChange1}
              size="md"
              radius="none"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-">
                      Project Details
                    </ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="flex flex-row justify-between my-5 ">
                          <label className="w-32 mr-1">Name:</label>
                          <Input
                            type="text"
                            className="max-w-xs border-1"
                            radius="none"
                            size="sm"
                            value={project.name}
                            onChange={(e) => handleInputChange(e)}
                            name="name"
                          />
                        </div>
                        <div className="flex flex-row justify-between my-5">
                          <label className="w-32 mr-1">Description:</label>
                          <Textarea
                            placeholder="Enter your description"
                            className="max-w-xs border-1"
                            radius="none"
                            value={project.description}
                            onChange={(e) => handleInputChange(e)}
                            name="description"
                          />
                        </div>
                        <div className="flex flex-row justify-between my-5">
                          <label className="w-32 mr-1">Client Name:</label>
                          <Input
                            type="text"
                            className="max-w-xs border-1"
                            radius="none"
                            size="sm"
                            value={project.clientName}
                            onChange={(e) => handleInputChange(e)}
                            name="clientName"
                          />
                        </div>
                        <div className="flex flex-row justify-between mt-5">
                          <label className="w-32 mr-1">Technology:</label>
                          <Input
                            type="text"
                            className="max-w-xs border-1"
                            radius="none"
                            size="sm"
                            value={project.technology}
                            onChange={(e) => handleInputChange(e)}
                            name="technology"
                          />
                        </div>
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        onPress={() => {
                          handleSend();
                          onClose();
                        }}
                        size="sm"
                        radius="none"
                      >
                        Save
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            <EllipsisHorizontalIcon className="w-6 h-6 ml-5 mt-2" />
          </div>
        </div>
        <div>
          <Table
            aria-label="Example static collection table"
            className="pl-12"
            isStriped
            removeWrapper
            shadow="sm"
          >
            <TableHeader>
              <TableColumn className="text-black">Project Name</TableColumn>
              <TableColumn className="text-black ">Description</TableColumn>
              <TableColumn className="text-black">Client Name</TableColumn>
              <TableColumn className="text-black">Technologies</TableColumn>
              <TableColumn className="text-black">Action</TableColumn>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="divide-x ">
                  <TableCell>
                    <span className="bg-slate-300 py-0 px-2 rounded-sm text-violet-800 font-bold mr-5">
                      {project.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-600">
                      {project.name}
                    </span>
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-slate-600">
                    {project.description}
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-slate-600">
                    {project.clientName}
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-slate-600">
                    {project.technology}
                  </TableCell>
                  <TableCell className="text-xs font-semibold text-slate-600">
                    <div className="">
                      <Button
                        className="text-black bg-inherit  rounded-none h-6"
                        size="sm"
                        onPress={() => {
                          handleUpdate(project.id)
                          onOpen2();
                        }}
                      >
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                      <Modal
                        isOpen={isOpen2}
                        onOpenChange={onOpenChange2}
                        size="md"
                        radius="none"
                      >
                        <ModalContent>
                          {(onClose) => (
                            <>
                              <ModalHeader className="flex flex-col gap-">
                                Project Details
                              </ModalHeader>
                              <ModalBody>
                                <form>
                                  <div className="flex flex-row justify-between my-5 ">
                                    <label className="w-32 mr-1">Name:</label>
                                    <Input
                                      type="text"
                                      className="max-w-xs border-1"
                                      radius="none"
                                      size="sm"
                                      value={updatedProject.name}
                                      onChange={(e) =>
                                        handleInputChange(e)
                                      }
                                      name="name"
                                    />
                                  </div>
                                  <div className="flex flex-row justify-between my-5">
                                    <label className="w-32 mr-1">
                                      Description:
                                    </label>
                                    <Textarea
                                      placeholder="Enter your description"
                                      className="max-w-xs border-1"
                                      radius="none"
                                      value={updatedProject.description}
                                      onChange={(e) =>
                                        handleInputChange(e)
                                      }
                                      name="description"
                                    />
                                  </div>
                                  <div className="flex flex-row justify-between my-5">
                                    <label className="w-32 mr-1">
                                      Client Name:
                                    </label>
                                    <Input
                                      type="text"
                                      className="max-w-xs border-1"
                                      radius="none"
                                      size="sm"
                                      value={updatedProject.clientName}
                                      onChange={(e) => handleInputChange(e)}
                                      name="clientName"
                                    />
                                  </div>
                                  <div className="flex flex-row justify-between mt-5">
                                    <label className="w-32 mr-1">
                                      Technology:
                                    </label>
                                    <Input
                                      type="text"
                                      className="max-w-xs border-1"
                                      radius="none"
                                      size="sm"
                                      value={updatedProject.technology}
                                      onChange={(e) =>
                                        handleInputChange(e)
                                      }
                                      name="technology"
                                    />
                                  </div>
                                </form>
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="primary"
                                  onPress={() => {handleUpdateSave(project.id); onClose()}}
                                  size="sm"
                                  radius="none"
                                >
                                  Update
                                </Button>
                              </ModalFooter>
                            </>
                          )}
                        </ModalContent>
                      </Modal>
                      <Popover placement="bottom" showArrow={true}>
                        <PopoverTrigger>
                          <Button
                            className="text-black bg-inherit rounded-none h-6 "
                            size="sm"
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="px-1 py-2">
                            <div className="text-xs font-bold">
                              Do you want to Delete this Row?
                            </div>
                            <div className="text-center">
                              <Button size="sm" className="bg-inherit">
                                <CheckIcon
                                  className="h-4 w-4"
                                  onClick={() => handleDelete(project.id) }
                                />
                              </Button>
                              
                              <Button size="sm" className="bg-inherit" >
                                <XMarkIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}
