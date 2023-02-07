import React, { Component } from 'react';
export default class Blog extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <>
                <section id="blog">
                    <div className=" row">
                        <h2 className="five columns" style={{ color: "white" }}>Blogs</h2>
                    </div>
                    <div className="row">
                        <div className="five columns">
                           <img src={`../images/portfolio/el_3.jpg`} className="item-img" />
                            <img src={`../images/portfolio/el_1.jpg`} className="item-img" />
                            <img src={`../images/portfolio/el_2.jpg`} className="item-img" />
                            <img src={`../images/portfolio/el_5.jpg`} className="item-img" />
                            <img src={`../images/portfolio/el_4.jpg`} className="item-img" />
                        </div>
                        <div className="seven columns main-col">
                            <h2 style={{ color: "white" }}>  Elastic Beanstalk</h2>
                            <p>
                                AWS elastic beanstalk (EB) is a service to deploy an application using aws components like EC2, ASG, ELB, RDS and etc. Elastic beanstalk is free service and only pay for the underly infrastructure. It is easier and fast to deploy an application. Elastic beanstalk support multiple languages like Go, Java, .Net, Node js, PHP, Python, Ruby and so on.
                            </p>
                            <p> In order to deploy Elastic BeanStalk, It is required to create an IAM role called aws-elasticbeanstalk-service-role with these Elastic BeanStalk policies.  </p>
                            <ol>
                                <li>AutoScalingFullAccess   </li>
                                <li>ElasticLoadBalancingFullAccess   </li>
                                <li>AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy   </li>
                            </ol>
                            <p>Then, Give your application name at Application name area & choose the platform at platform section. </p>
                            <p>
                                Once the environment is successfully deployed, you can view the available components and services. We can visit this by selecting “Elastic BeanStalk” from the AWS Management Console dashboard, then clicking on our EB environment we’d like to view. Once we’ve done that, we’re taken to the Elastic BeanStalk Dashboard menu. Here, we can see the most recent events that have happened to our environment, a simple health check, as well as the version of code currently deployed, and essential environment configuration details.
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}