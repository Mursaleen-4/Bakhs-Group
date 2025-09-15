# 🚢 Vessel Tracking System

A comprehensive real-time vessel tracking and management system built with modern web technologies. This system provides live tracking, route management, analytics, and administrative controls for maritime operations.

## 🚢 Enhanced Tracking Features

### Real-time Vessel Tracking
- **Live status updates** with WebSocket integration
- **Route progress monitoring** with visual timeline
- **Port arrival/departure management** with automated notifications
- **Multi-status tracking**: In Transit, At Port, Awaiting Departure, Delayed, Completed
- **Interactive vessel details** with expandable route information

### Advanced Analytics Dashboard
- **Performance metrics** with route efficiency analysis
- **Port utilization statistics** and dwell time tracking
- **Vessel efficiency monitoring** with on-time performance
- **Interactive charts** and visual data representation
- **Time-based filtering** (7 days, 30 days, 90 days, 1 year)

### Administrative Controls
- **Admin dashboard** with comprehensive vessel monitoring
- **Bulk operations** for efficient fleet management
- **Status override capabilities** for managers and admins
- **Vessel archiving** with automated cleanup
- **Priority-based vessel management**

### Audit Trail & Compliance
- **Comprehensive audit logging** for all vessel operations
- **User activity tracking** with timestamps
- **Change history** with before/after values
- **Export capabilities** (JSON, CSV formats)
- **Retention management** for compliance

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication with HTTP-only cookies
- Bcrypt password hashing
- Role-based access control (Admin/User)
- Rate limiting and security headers
- CORS protection

### 🚢 Vessel Management
- Complete CRUD operations for vessels
- Advanced search and filtering
- Real-time data with server-side pagination
- Bulk operations for admin users
- Vessel statistics and dashboard
- **Real-time vessel tracking** with live status updates
- **Route visualization** with timeline progress
- **Port management** with arrival/departure tracking
- **Status management** with automated workflows

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Accessibility compliant (WCAG 2.1 AA)
- Dark mode support
- Mobile-first approach

### 📊 Advanced Features
- Debounced search functionality
- Sorting and pagination
- Optimistic UI updates
- Error handling and validation
- Health monitoring endpoints

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- React 18 with TypeScript
- React Router for navigation
- Framer Motion for animations
- Tailwind CSS for styling
- Axios for API calls
- React Hook Form for form handling
- Zod for validation

**Backend:**
- Node.js with Express
- TypeScript for type safety
- MongoDB with Mongoose
- JWT authentication
- Zod validation
- Comprehensive middleware

**DevOps:**
- Docker containers
- GitHub Actions CI/CD
- Health checks
- Structured logging

### Project Structure

```
ShippingLineApp/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── lib/            # Utilities and API client
│   │   ├── routes/         # Route configuration
│   │   └── assets/         # Static assets
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Custom middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── schemas/        # Validation schemas
│   │   ├── scripts/        # Database seeding
│   │   ├── utils/          # Utility functions
│   │   └── tests/          # Test files
│   └── package.json
│
├── docker-compose.yml      # Docker configuration
├── .env.example           # Environment variables template
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 9+
- MongoDB Atlas account or local MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ShippingLineApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   - Generate JWT secret: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`
   - Configure MongoDB URI
   - Set up WhatsApp URL

4. **Start development servers**
   ```bash
   npm run dev
   ```

5. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

### Default Login Credentials

After seeding:
- **Admin**: `admin` / `AdminPass123!`
- **User**: `operator1` / `OperatorPass123!`
- **Manager**: `manager` / `ManagerPass123!`

## 📝 API Documentation

### Authentication Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `POST /api/auth/refresh` - Refresh JWT token
- `GET /api/auth/check` - Check auth status

### Vessel Endpoints

- `GET /api/vessels` - List vessels (with search, filter, pagination)
- `POST /api/vessels` - Create new vessel
- `GET /api/vessels/:id` - Get vessel by ID
- `PUT /api/vessels/:id` - Update vessel
- `DELETE /api/vessels/:id` - Delete vessel
- `GET /api/vessels/stats` - Get dashboard statistics
- `DELETE /api/vessels/bulk` - Bulk delete (Admin only)

### Vessel Tracking Endpoints

- `GET /api/v1/tracking/public` - Public vessel tracking data
- `GET /api/v1/tracking/vessel/:id` - Detailed vessel tracking
- `PUT /api/v1/tracking/vessel/:id/status` - Update vessel status
- `POST /api/v1/tracking/vessel/:id/arrival` - Mark vessel arrival
- `POST /api/v1/tracking/vessel/:id/departure` - Mark vessel departure
- `POST /api/v1/admin/vessels/bulk` - Bulk vessel operations
- `POST /api/v1/admin/vessels/archive` - Archive vessels

### Analytics Endpoints

- `GET /api/v1/analytics/tracking` - Comprehensive analytics
- `GET /api/v1/analytics/routes/:id/performance` - Route performance
- `GET /api/v1/analytics/ports/:id/metrics` - Port analytics

### Audit Trail Endpoints

- `GET /api/v1/audit/entity/:type/:id` - Entity audit history
- `GET /api/v1/audit/user/:id` - User activity log
- `GET /api/v1/audit/logs` - Filtered audit logs
- `GET /api/v1/audit/export` - Export audit data

### Health Endpoints

- `GET /api/health` - Health check
- `GET /api/health/ready` - Readiness probe
- `GET /api/health/live` - Liveness probe

## 🧪 Testing

### Run Tests

```bash
# Backend tests
npm run test --workspace=server

# Frontend tests  
npm run test --workspace=client

# All tests
npm test
```

### Test Coverage

```bash
npm run test:coverage --workspace=server
```

## 🏭 Production Deployment

### Using Docker

1. **Build and start containers**
   ```bash
   docker-compose up -d
   ```

2. **Scale services**
   ```bash
   docker-compose up -d --scale server=3
   ```

### Manual Deployment

1. **Build applications**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Environment Configuration

**Development:**
- Server: `process.env.VITE_API_URL || 'http://localhost:5000'`
- Client: `http://localhost:5173`

**Production:**
- Configure reverse proxy (Nginx)
- Set up SSL certificates
- Use environment-specific values
- Enable monitoring and logging

## 🔧 Scripts

### Root Level
- `npm run dev` - Start both client and server in development
- `npm run build` - Build both applications
- `npm test` - Run all tests
- `npm run lint` - Lint all code
- `npm run seed` - Seed database

### Server Specific
- `npm run dev --workspace=server` - Start server only
- `npm run build --workspace=server` - Build server
- `npm run start --workspace=server` - Start production server

### Client Specific
- `npm run dev --workspace=client` - Start client only
- `npm run build --workspace=client` - Build client
- `npm run preview --workspace=client` - Preview build

## 📊 Performance

### Lighthouse Scores (Target)
- Performance: ≥85
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥85

### Features for Performance
- Code splitting and lazy loading
- Image optimization
- Gzip compression
- Efficient database queries
- Caching strategies
- Bundle optimization

## 🔒 Security

### Frontend
- XSS protection
- Input sanitization
- Secure routing
- Environment variable protection

### Backend
- Helmet security headers
- Rate limiting
- CORS configuration
- Input validation
- SQL injection prevention
- Authentication tokens in HTTP-only cookies

## 🌐 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Update documentation
- Follow conventional commits
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Maritime industry standards
- Open source community
- Modern web development practices
- Security best practices

## 📚 Documentation

- **API Documentation**: [API_DOCUMENTATION.md](./docs/API_DOCUMENTATION.md)
- **WebSocket API**: Real-time communication guide
- **Database Schema**: MongoDB collection structures
- **Performance Guide**: Optimization and monitoring

## 🔄 Real-time Features

### WebSocket Integration
- Real-time vessel status updates
- Live notifications for status changes
- Multi-user subscriptions with role-based access
- Automatic reconnection with connection health monitoring

### Performance Optimization
- Database indexing for optimal query performance
- Connection pooling and resource management
- Slow query monitoring and optimization
- Caching strategies for frequently accessed data

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact: support@vesseltracking.com
- Documentation: [docs/API_DOCUMENTATION.md](./docs/API_DOCUMENTATION.md)
- Developer Portal: [developers.vesseltracking.com](https://developers.vesseltracking.com)

---

**Built with ❤️ for maritime logistics and vessel tracking**
