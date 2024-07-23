import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import cover from "../../../public/assets/cover.webp";
import Link from "next/link";

export default function Superchat() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={cover}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
                    <h2 className="py-2">Malaria Detection</h2>
                    <h3>Deep Learning | TensorFlow | WanDB</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 text-justify">
                    <p>Project</p>
                    <h2 className="mb-10">Introducing Malaria Detection</h2>
                    <p className="mb-5">
                        In this project, I focused on leveraging advanced medical imaging techniques
                        to enhance the detection of malaria. The goal was to improve the accuracy and
                        efficiency of the diagnostic process using deep learning models. Here’s a breakdown
                        of the key steps involved:
                    </p>

                    <h2 className="mb-5">Key Steps:</h2>
                    <ul>
                        <li className="mb-5">
                            <strong>Image Quality Enhancement:</strong> To ensure the accuracy of our models,
                            I implemented various techniques to improve image quality. This included noise reduction
                            to eliminate irrelevant disturbances and contrast enhancement to highlight important
                            features in the medical images. These preprocessing steps were crucial for enhancing
                            the performance of the subsequent model.
                        </li>
                        <li className="mb-5">
                            <strong>Data Augmentation: </strong> To address issues of data scarcity and variability,
                            I employed advanced data augmentation techniques such as CutMix and Mixup. I make comparison
                            of these data augmentation techniques to check their suitability for our use case and
                            selected
                            the Mixup data augmentation
                            technique based on model performance. These methods help in creating synthetic variations of
                            the training images, thereby improving the
                            robustness and generalization of the model. The paper of CutMix and Mixup data augmentation
                            is given below for more context:

                            <p className="mb-5" style={{textIndent: 34}}>
                                <strong>CutMix Data Augmentation: </strong> Yun, S., Han, D., Oh, S. J., Chun, S., Choe,
                                J.,
                                & Yoo, Y. (2019). Cutmix:
                                Regularization strategy to train strong classifiers with localizable features. In
                                Proceedings of the IEEE/CVF international conference on computer vision (pp. 6023-6032).
                            </p>
                            <p className="mb-5" style={{textIndent: 34}}>
                                <strong>Mixup Data Augmentation: </strong> Zhang, H., Cisse, M., Dauphin, Y. N., &
                                Lopez-Paz, D. (2017). mixup: Beyond empirical
                                risk minimization. arXiv preprint arXiv:1710.09412.
                            </p>
                        </li>
                        <li className="mb-5">
                            <strong>Model Training and Hyperparameter Tuning:</strong> I closely monitored the training
                            process of our deep learning model using Weights & Biases (WandB). This tool allowed me to
                            track various metrics and adjust hyperparameters to optimize the model’s performance,
                            ensuring it learned effectively from the data.


                        </li>
                        <li className="mb-5">
                            <strong>Model Deployment:</strong> The final step involved deploying a Convolutional Neural Network (CNN)
                            for the classification task. The CNN was trained to distinguish between malaria and non-malaria cases based
                            on the medical images. This deep learning model proved to be effective in automating the diagnostic process,
                            providing accurate and timely results.


                        </li>

                    </ul>

                    {/*<p className="mb-5">*/}
                    {/*    Experience the next frontier of peer-to-peer communication with my*/}
                    {/*    super chat application, where the possibilities for connection are*/}
                    {/*    limitless. Embrace a new era of collaborative and inclusive*/}
                    {/*    conversations, making communication not just a necessity but an*/}
                    {/*    enjoyable and enriching experience.*/}
                    {/*</p>*/}

                    {/*<a href={"https://solitary-leaf-5079.fly.dev/"}>*/}
                    {/*    <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4 mr-8">*/}
                    {/*        Demo*/}
                    {/*    </button>*/}
                    {/*</a>*/}
                    <Link
                        href={"https://github.com/ehsansiddiqui/Malaria_Detection"}
                        target="_blank"
                    >
                        <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4">
                            Code
                        </button>
                    </Link>
                </div>
                <div className="h-fit col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Stack</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Python
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                TensorFlow
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Weight and Biases
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
}
